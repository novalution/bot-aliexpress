const puppeteer = require('puppeteer');
const { devices } = puppeteer;
const iPhoneX = devices["iPhone X"];

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ['--incognito','--no-default-browser-check','--disable-site-isolation-trials','--no-experiments','--ignore-gpu-blacklist','--ignore-certificate-errors','--ignore-certificate-errors-spki-list','--disable-gpu','--disable-extensions','--disable-default-apps','--enable-features=NetworkService','--disable-setuid-sandbox','--no-sandbox','--disable-webgl','--disable-threaded-animation','--disable-threaded-scrolling','--disable-in-process-stack-traces','--disable-histogram-customizer','--disable-gl-extensions','--disable-composited-antialiasing','--disable-canvas-aa','--disable-3d-apis','--disable-accelerated-2d-canvas','--disable-accelerated-jpeg-decoding','--disable-accelerated-mjpeg-decode','--disable-app-list-dismiss-on-blur','--disable-accelerated-video-decode']
});
  const context = await browser.createIncognitoBrowserContext();  
  const page = await context.newPage();
  const ali = `https://a.aliexpress.com/_mNypvIZ`;
  await page.emulate(iPhoneX);
  await page.goto(`${ali}`);
  //await page.waitForSelector('#am-modal-container-1608799656580 > div > div.am-modal-wrap.projectGlobal_ModalHasClose_FlexInTop > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(5) > div.goBtn___3aVca')
  await page.click('#am-modal-container-1608799656580 > div > div.am-modal-wrap.projectGlobal_ModalHasClose_FlexInTop > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(5) > div.goBtn___3aVca')
  await page.waitForSelector('#root > ul > li:nth-child(1)')
  await page.click('#root > ul > li:nth-child(1)')
  await page.type('#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(2) > input','novalreff10@live.com')
  await page.type('#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(3) > input','lalalili')
  await page.waitForSelector('#root > div.fm-tabs-content > div:nth-child(1) > div > div > button')
  await page.click('#root > div.fm-tabs-content > div:nth-child(1) > div > div > button')
  await page.goto('https://aliexpress.com')
  await page.waitForSelector('#footer-account > svg')
  await page.click('#footer-account > svg')
  await page.waitForSelector('##account-section > div > div > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1)')
  await page.click('#account-section > div > div > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1)')
  await page.waitForSelector('#account-section > div > div > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)')
  await page.click('#account-section > div > div > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)')
  await page.waitForSelector('#account-section > div > div > div.swipeable-views > div > div > ul > div:nth-child(2) > span > span:nth-child(2)')
  await page.click('#account-section > div > div > div.swipeable-views > div > div > ul > div:nth-child(2) > span > span:nth-child(2)')
  await page.waitForSelector('#account-section > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(4)')
  await page.click('#account-section > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(4)')
  await page.waitForSelector('#account-section > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(6)')
  await page.click('#account-section > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(6)')
  await page.goto(`${ali}`)
  await page.waitForSelector('#am-modal-container-1608800620474 > div > div.am-modal-wrap.projectGlobal_ModalHasClose_FlexInTop > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(5) > div.goBtn___3aVca')
  await page.click('#am-modal-container-1608800620474 > div > div.am-modal-wrap.projectGlobal_ModalHasClose_FlexInTop > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(5) > div.goBtn___3aVca')
  await page.waitForSelector('#am-modal-container-1608800678816 > div > div.am-modal-wrap > div > div > div > div > div.innerContentWrapper___24iXr > div.modalInnerContent___6bRf9 > div > div.box___3P30A > h1')
  await page.click('#am-modal-container-1608800678816 > div > div.am-modal-wrap > div > div > div > div > div.innerContentWrapper___24iXr > div.modalInnerContent___6bRf9 > div > div.box___3P30A > h1')
  await page.waitForSelector('#copylink')
  let reff = await page.$eval("#copylink", (element) => {
    return element.getAttribute("data-clipboard-text");
  })
  browser.close()
  console.log(reff)
  // await browser.close();
})();