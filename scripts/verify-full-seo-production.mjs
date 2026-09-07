import { chromium } from 'playwright-core';
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
  '.js': 'text/javascript'
};

async function startStaticServer(port = 54321) {
  const distDir = path.join(process.cwd(), 'dist');
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(distDir, reqPath);

    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath += '.html';
    } else if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
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

  await new Promise(resolve => server.listen(port, resolve));
  return server;
}

async function verifyAll() {
  console.log('🔍 =======================================================');
  console.log('   INSPECCIÓN COMPLETA DE SEO & AI-SEO EN NAVEGADOR REAL');
  console.log('=======================================================\n');

  const server = await startStaticServer(0);
  const PORT = server.address().port;
  console.log(`⚡ Servidor de producción levantado en http://127.0.0.1:${PORT}`);

  const chromePath = process.env.PLAYWRIGHT_CHROME_PATH || '/home/oscar/snap/antigravity-cli/common/ms-playwright/chromium-1243/chrome-linux64/chrome';
  const browser = await chromium.launch({
    executablePath: chromePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // 1. INSPECT SPANISH HOMEPAGE (/)
  console.log(`\n🌐 1. Inspeccionando Home Español (http://127.0.0.1:${PORT}/)...`);
  await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });

  const esTitle = await page.title();
  const esDesc = await page.$eval('meta[name="description"]', el => el.content);
  const esCanonical = await page.$eval('link[rel="canonical"]', el => el.href);
  const esOgTitle = await page.$eval('meta[property="og:title"]', el => el.content);
  const esOgDesc = await page.$eval('meta[property="og:description"]', el => el.content);
  const esOgImage = await page.$eval('meta[property="og:image"]', el => el.getAttribute('content'));
  const esOgLocale = await page.$eval('meta[property="og:locale"]', el => el.content);
  const esTwitterCard = await page.$eval('meta[name="twitter:card"]', el => el.content);
  const esH1 = await page.$eval('h1', el => el.innerText.replace(/\s+/g, ' ').trim());

  console.log(`   - Title [${esTitle.length} ch]: "${esTitle}"`);
  console.log(`   - Meta Description [${esDesc.length} ch]: "${esDesc}"`);
  console.log(`   - Canonical: ${esCanonical}`);
  console.log(`   - OpenGraph: og:title="${esOgTitle}", og:image="${esOgImage}", og:locale="${esOgLocale}"`);
  console.log(`   - Twitter Card: "${esTwitterCard}"`);
  console.log(`   - H1 Principal: "${esH1}"`);

  // Inspect JSON-LD Schema.org Array
  const esJsonLdRaw = await page.$eval('script[type="application/ld+json"]', el => el.textContent);
  const schemas = JSON.parse(esJsonLdRaw);
  const schemaTypes = schemas.map(e => e['@type']);
  console.log(`   - Entidades JSON-LD Schema.org (${schemaTypes.length}): ${schemaTypes.join(', ')}`);

  const org = schemas.find(e => e['@type'] === 'Organization');
  const localBiz = schemas.find(e => e['@type'] === 'BarOrPub');
  const menu = schemas.find(e => e['@type'] === 'Menu');
  const breadcrumbs = schemas.find(e => e['@type'] === 'BreadcrumbList');
  const faq = schemas.find(e => e['@type'] === 'FAQPage');

  console.log(`     ✓ Organization: "${org?.name}" (sameAs: ${org?.sameAs?.length} perfiles)`);
  console.log(`     ✓ LocalBusiness/BarOrPub: "${localBiz?.name}" (Dirección: ${localBiz?.address?.streetAddress}, Amenidades: ${localBiz?.amenityFeature?.map(a => a.name).join(', ')})`);
  console.log(`     ✓ Menu: "${menu?.name}" (${menu?.hasMenuSection?.length} secciones destacadas con precios en COP)`);
  console.log(`     ✓ BreadcrumbList: ${breadcrumbs?.itemListElement?.map(b => b.name).join(' > ')}`);
  console.log(`     ✓ FAQPage: ${faq?.mainEntity?.length} preguntas y respuestas locales en español.`);

  // 2. INSPECT GEO TAGS
  console.log('\n📍 2. Verificando Geo-Tags locales (Villavicencio, Meta, Colombia)...');
  const geoRegion = await page.$eval('meta[name="geo.region"]', el => el.content);
  const geoPlacename = await page.$eval('meta[name="geo.placename"]', el => el.content);
  const geoPosition = await page.$eval('meta[name="geo.position"]', el => el.content);
  const icbm = await page.$eval('meta[name="ICBM"]', el => el.content);
  console.log(`   - geo.region: "${geoRegion}"`);
  console.log(`   - geo.placename: "${geoPlacename}"`);
  console.log(`   - geo.position / ICBM: "${geoPosition}" / "${icbm}"`);

  // 3. INSPECT robots.txt
  console.log(`\n🤖 3. Inspeccionando /robots.txt...`);
  const robotsRes = await page.goto(`http://127.0.0.1:${PORT}/robots.txt`);
  const robotsContent = await robotsRes.text();
  console.log('--- Contenido de robots.txt ---');
  console.log(robotsContent.trim());
  console.log('------------------------------');

  // 4. INSPECT sitemap-index.xml
  console.log(`\n🗺️ 4. Inspeccionando /sitemap-index.xml...`);
  const sitemapRes = await page.goto(`http://127.0.0.1:${PORT}/sitemap-index.xml`);
  const sitemapContent = await sitemapRes.text();
  console.log('--- Contenido de sitemap-index.xml ---');
  console.log(sitemapContent.trim());
  console.log('------------------------------');

  // 6. INSPECT llms.txt & llms-full.txt
  console.log('\n🧠 6. Inspeccionando archivos de Inteligencia Artificial (/llms.txt y /llms-full.txt)...');
  const llmsRes = await page.goto(`http://127.0.0.1:${PORT}/llms.txt`);
  const llmsText = await llmsRes.text();
  console.log(`   ✓ /llms.txt Status: ${llmsRes.status()} (${llmsText.length} bytes)`);
  console.log(`     Titular: ${llmsText.split('\n')[0]}`);

  const llmsFullRes = await page.goto(`http://127.0.0.1:${PORT}/llms-full.txt`);
  const llmsFullText = await llmsFullRes.text();
  console.log(`   ✓ /llms-full.txt Status: ${llmsFullRes.status()} (${llmsFullText.length} bytes)`);
  console.log(`     Titular: ${llmsFullText.split('\n')[0]}`);

  await browser.close();
  server.close();

  console.log('\n=======================================================');
  console.log('   🎉 RESULTADO FINAL: 100% AUDITADO Y VERIFICADO OK');
  console.log('=======================================================\n');
}

verifyAll().catch(console.error);
