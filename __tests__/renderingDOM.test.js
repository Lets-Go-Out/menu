import React from "react";
import View from "../src/component/view.jsx";
import { shallow } from "enzyme";
import sinon from "sinon";
import { connect } from "react-redux";
import configureStore from "redux-mock-store";

describe("testing my test", () => {
  test("testing my test", () => {
    expect(true).toBe.true;
  });
});

describe("testing View to see if it is rendered", () => {
  const initialState = {
    navmenu: ["Lunch", "Dinner", "Brunch", "Happy Hour"],
    selected: "Lunch", //need to use Caps
    viewmode: "container-1",
    viewFull: "viewFull", //view Button
    restaurantID: 1,
    entry: []
  };
  test("View needs to render", () => {
    const mockStore = configureStore();
    let store = mockStore(initialState);
    let wrapper = shallow(<View store={store} />).dive();
    expect(
      wrapper
        .find("button")
        .childAt(0)
        .text()
    ).toBe("View All");
  });
});
