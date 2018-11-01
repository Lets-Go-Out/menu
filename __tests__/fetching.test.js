import React from "react";
import axios from "axios";
import pupeeteer from "puppeteer";

describe("hello", () => {
  test("hello", () => {
    expect(true).toBe.true;
  });
});

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

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("testing asynchronous functions", () => {
  expect.assertions(1);
  return axios
    .get("http://127.0.0.1:3001/restaurants/1/menu/Lunch")
    .then(function(response) {
      expect(response).toBe(response);
    })
    .catch(function(error) {
      console.log(error);
    });
});

test("testing asynchronous functions", () => {
  expect.assertions(1);
  return axios
    .get("http://127.0.0.1:3001/restaurants/1/menu/Happy_Hour")
    .then(function(response) {
      expect(response).toBe(response);
    })
    .catch(function(error) {
      console.log(error);
    });
});
