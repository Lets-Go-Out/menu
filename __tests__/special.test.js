import React from "react";
import Renderer from "react-test-renderer";
import Menu from "../src/component/menu.jsx";
import Special from "../src/component/special.jsx";
import Specialentries from "../src/component/specialentries.jsx";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import Store from "../src/component/storage/store.js";
import fetch from "isomorphic-fetch"; //do not remove this!!! you need it for the stupid fetch that node doesn't have

describe("special exists", () => {
  test("special exists", () => {
    const wrapper = shallow(<Menu store={Store} />).dive();
    const specialWrapper = shallow(<Special store={Store} />).dive();
    expect(wrapper.find("Connect(Special)")).toHaveLength(1);
    expect(specialWrapper.props().fetchSpecial).toBe(undefined);
    //this shouldn't not have a special menu!! because not all restaurants have special menu!!
  });
});
