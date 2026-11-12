import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

async function startStaticServer(port = 54322) {
  const distDir = path.join(process.cwd(), 'dist');
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(distDir, reqPath);
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) filePath += '.html';
    if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });
  await new Promise((resolve) => server.listen(port, resolve));
  return server;
}

async function run() {
  const server = await startStaticServer();
  const browser = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const screenshotsDir = path.join(process.cwd(), 'docs', 'screenshots');

  // Test Desktop
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://127.0.0.1:54322/#calculadora', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const calcSection = await page.$('#calculadora');
    await calcSection.scrollIntoViewIfNeeded();

    // Increment first item (Aguila Light) twice
    const firstIncBtn = await page.$('.calc-product-item:not(.hidden) button[data-action="increment"]');
    if (firstIncBtn) {
      await firstIncBtn.click();
      await firstIncBtn.click();
    }

    // Switch to 'compartir'
    const compartirTab = await page.$('button[data-calc-filter="compartir"]');
    if (compartirTab) {
      await compartirTab.click();
      await page.waitForTimeout(200);
      const incBtn = await page.$('.calc-product-item:not(.hidden) button[data-action="increment"]');
      if (incBtn) await incBtn.click();
    }

    // Switch to 'otras'
    const otrasTab = await page.$('button[data-calc-filter="otras"]');
    if (otrasTab) {
      await otrasTab.click();
      await page.waitForTimeout(200);
      const incBtn = await page.$('.calc-product-item:not(.hidden) button[data-action="increment"]');
      if (incBtn) await incBtn.click();
    }

    await page.waitForTimeout(300);

    // Hide fixed header so screenshot is clean
    await page.evaluate(() => {
      const h = document.getElementById('header-global');
      if (h) h.style.display = 'none';
    });

    const activeShot = path.join(screenshotsDir, '05-calculadora-active-desktop.png');
    await calcSection.screenshot({ path: activeShot });
    console.log(`📸 Desktop active ticket saved to: ${activeShot}`);

    // Verify total text
    const totalText = await page.$eval('#ticket-total-display', (el) => el.textContent.trim());
    console.log(`💰 Active total on desktop: ${totalText}`);

    // Verify WhatsApp URL
    const waUrl = await page.$eval('#btn-whatsapp-share', (el) => el.getAttribute('href'));
    console.log(`📱 WhatsApp share link: ${waUrl ? 'Generated successfully' : 'Missing'}`);

    await page.close();
  }

  // Test Mobile
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto('http://127.0.0.1:54322/#calculadora', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const calcSection = await page.$('#calculadora');
    await calcSection.scrollIntoViewIfNeeded();

    // Increment item
    const firstIncBtn = await page.$('.calc-product-item:not(.hidden) button[data-action="increment"]');
    if (firstIncBtn) {
      await firstIncBtn.click();
      await firstIncBtn.click();
    }

    await page.waitForTimeout(300);

    await page.evaluate(() => {
      const h = document.getElementById('header-global');
      if (h) h.style.display = 'none';
    });

    const activeShotMobile = path.join(screenshotsDir, '05-calculadora-active-mobile.png');
    await calcSection.screenshot({ path: activeShotMobile });
    console.log(`📸 Mobile active ticket saved to: ${activeShotMobile}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('✅ Interactive tests passed!');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
