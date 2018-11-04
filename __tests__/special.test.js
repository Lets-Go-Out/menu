import React from "react";
import Renderer from "react-test-renderer";
import Menu from "../src/component/menu.jsx";
import Special from "../src/component/special.jsx";
import Specialentries from "../src/component/specialentries.jsx";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { shallow, mount } from "enzyme";
import Store from "../src/component/storage/store.js";
import configureStore from "redux-mock-store"; //ES6 modules
import fetch from "isomorphic-fetch"; //do not remove this!!! you need it for the stupid fetch that node doesn't have
// import { fetchSpecial } from "../src/APICalls/fetch.js";

const mockStore = configureStore([thunk]);
describe("special exists", () => {
  test("special exists", () => {
    const wrapper = shallow(<Menu store={Store} />).dive();
    const mock = jest.fn();
    const initialState = {
      fetchSpecial: mock,
      special: [
        { head: "ijsdlfjsl;dfj", body: "jdkslfjksldf", restaurantID: "1" },
        { head: "sdfs;dfj", body: "ifjsdjiwooweiurowueprp", restaurantID: "1" }
      ]
    };
    const mockstore = mockStore(initialState);
    const specialWrapper = shallow(<Special store={mockstore} />).dive();
    expect(wrapper.find("Connect(Special)")).toHaveLength(1);
    expect(specialWrapper.props().special).toEqual(undefined);
    //this shouldn't not have a special menu!! because not all restaurants have special menu!!
    expect(specialWrapper.props().children.length).toBe(2);
  });
});
describe("special mounted", () => {
  test("special mount with mock store", () => {
    const mock = jest.fn();
    const fetchSpecial = jest.fn();
    const initialState = {
      fetchSpecial: mock,
      special: [
        { head: "ijsdlfjsl;dfj", body: "jdkslfjksldf", restaurantID: "1" },
        { head: "sdfs;dfj", body: "ifjsdjiwooweiurowueprp", restaurantID: "1" }
      ]
    };
    const mockstore = mockStore(initialState);
    const mounter = mount(<Special store={mockstore} />);
    mounter
      .props()
      .store.getState()
      .fetchSpecial();
    expect(mock).toHaveBeenCalled();
  });
});
