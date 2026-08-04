// Renders scripts/og-card.html to public/og-image.png at exactly 1200x630.
//
// Run:  node scripts/generate-og.js
//
// Why a script instead of a hand-made image: the card stays in sync with the site
// (same fonts, same lime, same numbers) and is regenerable when a metric changes.
// Requires Playwright's chromium, which is already on this machine. If it is not
// installed in CI, skip this script there — the committed PNG is what ships.

const path = require('path');

const CARD = path.join(__dirname, 'og-card.html');
const OUT = path.join(__dirname, '..', 'public', 'og-image.png');

(async () => {
  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch {
    console.error(
      'playwright not resolvable from this project.\n' +
        'Run with an explicit path, e.g.\n' +
        '  node -e "require(\'/path/to/playwright\')"\n' +
        'or install it: npm i -D playwright'
    );
    process.exit(1);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2, // retina-crisp; social platforms downscale cleanly
  });

  await page.goto('file://' + CARD, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);

  await page.screenshot({ path: OUT, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await browser.close();

  console.log('wrote', OUT);
})();
