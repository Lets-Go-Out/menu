import React from "react";
import View from "../src/component/view.jsx";
import { shallow } from "enzyme";
import sinon from "sinon";
import { connect } from "react-redux";
import configureStore from "redux-mock-store";
import Store from "../src/component/storage/store.js";

describe("testing my view full menu button", () => {
  test("testing to see if my full menu view works", () => {
    let wrapper = shallow(<View store={Store} />);
    expect(wrapper.props().navmenu).toEqual([
      "Lunch",
      "Dinner",
      "Brunch",
      "Happy Hour"
    ]);
    expect(wrapper.props().selected).toBe("Lunch");
    expect(wrapper.props().viewmode).toBe("container-1");
    expect(wrapper.props().restaurantID).toBe(1);
  });
});
