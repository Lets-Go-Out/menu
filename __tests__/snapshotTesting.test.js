import React from "react";
import Renderer from "react-test-renderer";
import Entries from "../src/component/entries.jsx";
import Menu from "../src/component/menu.jsx";
import { Provider } from "react-redux";
import Store from "../src/component/storage/store.js";
import fetch from "isomorphic-fetch"; //do not remove this!!! you need it for the stupid fetch that node doesn't have

describe("snapshotting", () => {
  test("snapshotting", () => {
    const snapshot1 = Renderer.create(
      <Provider store={Store}>
        <Menu />
      </Provider>
    ).toJSON();
    expect(snapshot1).toMatchSnapshot();
  });
});
