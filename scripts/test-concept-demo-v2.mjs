import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.xml': 'application/xml; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

async function startStaticServer(port = 54321) {
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

async function runAudit() {
  console.log('🏁 Starting Concept Demo V2 Playwright Visual Audit...\n');

  const screenshotsDir = path.join(process.cwd(), 'docs', 'screenshots');
  fs.mkdirSync(screenshotsDir, { recursive: true });

  const server = await startStaticServer(54321);
  const targetUrl = 'http://127.0.0.1:54321/';

  const browser = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  let totalErrors = 0;

  // Viewports to test
  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    console.log(`📱 Testing Viewport: ${vp.name.toUpperCase()} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

    const consoleErrors = [];
    const failedRequests = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('requestfailed', (req) => {
      failedRequests.push(`${req.method()} ${req.url()}: ${req.failure()?.errorText}`);
    });

    page.on('response', (res) => {
      if (res.status() >= 400) {
        failedRequests.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.goto(targetUrl, { waitUntil: 'networkidle' });

    // Check horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    if (hasHorizontalOverflow) {
      console.error(`❌ [${vp.name}] Horizontal overflow detected! scrollWidth > clientWidth`);
      totalErrors++;
    } else {
      console.log(`✅ [${vp.name}] Zero horizontal overflow confirmed.`);
    }

    if (consoleErrors.length > 0) {
      console.error(`❌ [${vp.name}] Console errors:`, consoleErrors);
      totalErrors += consoleErrors.length;
    } else {
      console.log(`✅ [${vp.name}] 0 console errors.`);
    }

    if (failedRequests.length > 0) {
      console.error(`❌ [${vp.name}] Failed network requests:`, failedRequests);
      totalErrors += failedRequests.length;
    } else {
      console.log(`✅ [${vp.name}] 0 broken resources (404/failed).`);
    }

    // Capture Hero screenshot
    const heroEl = await page.$('#inicio');
    if (heroEl) {
      const heroShotPath = path.join(screenshotsDir, `01-hero-${vp.name}.png`);
      await heroEl.screenshot({ path: heroShotPath });
      console.log(`📸 [${vp.name}] Saved Hero screenshot: ${heroShotPath}`);
    }

    // Full page screenshot
    const fullShotPath = path.join(screenshotsDir, `full-page-${vp.name}.png`);
    await page.screenshot({ path: fullShotPath, fullPage: false });

    await page.close();
  }

  await browser.close();
  server.close();

  if (totalErrors > 0) {
    console.error(`\n💥 Audit completed with ${totalErrors} issue(s).`);
    process.exit(1);
  } else {
    console.log('\n🎉 Concept Demo V2 Playwright Audit PASSED flawlessly!');
  }
}

runAudit().catch((err) => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
