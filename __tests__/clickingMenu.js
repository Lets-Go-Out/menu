import React from "react";
import { shallow } from "enzyme";
import { connect } from "react-redux";
import { shallowWithStore } from "enzyme-redux";
import { createMockStore, createMockDispatch } from "redux-test-utils";
import Store from "../src/component/storage/store.js";
import fetch from "isomorphic-fetch"; //do not remove this!!! you need it for the stupid fetch that node doesn't have

import Menu from "../src/component/menu.jsx";
import { Button } from "../src/component/menubutton.jsx";

describe("<Menu />", () => {
  it("Menu", () => {
    const wrapper = shallow(<Menu store={Store} />).dive();
    expect(wrapper.find("#menuNav").children().length).toBe(4);
  });

  it("Menu", () => {
    const action = {
      type: "MENUBUTTON_CLICK"
    };
    const mapDispatchToProps = dispatch => ({
      clickDispatcher() {
        dispatch(action);
      }
    });
    const store = createMockStore();
    const ConnectedComponent = connect(
      null,
      mapDispatchToProps
    )(Button);
    const wrapper2 = shallowWithStore(<ConnectedComponent />, store).dive();
    wrapper2.simulate("click"); //click simulation
    expect(store.isActionDispatched(action)).toBe(true);
  });
});
