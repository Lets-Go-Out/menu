const axios = require("axios");
const pupeeteer = require("puppeteer");
const pageUrl = "http://127.0.0.1:3000/";

let page, browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await pupeeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe("searh function", () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: "networkidle2" });
  });
  test("initial tital is correct", async () => {
    var div = ".container";
    const title = await page.$eval(div, e => e.textContent);
    expect(title).toBe.true;
  });
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("testing asynchronous functions", () => {
  expect.assertions(1);
  return axios
    .get("http://127.0.0.1:3000/restaurant/menu/Lunch")
    .then(function(response) {
      expect(response).toBe(response);
    })
    .catch(function(error) {
      console.log(error);
    });
});
