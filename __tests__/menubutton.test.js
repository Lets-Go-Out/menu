import React from "react";
import { connect } from "react-redux";
import { shallowWithStore } from "enzyme-redux";
import { createMockStore, createMockDispatch } from "redux-test-utils";
import Menubutton from "../src/component/menubutton.jsx";
import Menu from "../src/component/menu.jsx";
import Store from "../src/component/storage/store.js";
import Reducer from "../src/component/reducers/reducer.jsx";
//import store from "../src/storage/store.js";

describe("dispatch", () => {
  const ReactComponent = () => <div>dummy component</div>;
  it("works", () => {
    const action = {
      type: "type"
    };
    const mapDispatchToProps = dispatch => ({
      dispatchProp() {
        dispatch(action);
      }
    });
    const store = createMockStore();
    const ConnectedComponent = connect(
      undefined,
      mapDispatchToProps
    )(Menubutton);
    const component = shallowWithStore(<ConnectedComponent />, store);
    component.props().dispatchProp(); //this basically is like a click
    expect(store.isActionDispatched(action)).toBe(true);
  });
});

const data = {
  name: "blabla",
  description: "some random description",
  ingredients: ["chicken", "beans"],
  price: "$32.10",
  restaurantID: "1",
  menu: "Lunch"
};

describe("click", () => {
  const action = {
    type: "MENUBUTTON_CLICK",
    data: data,
    value: "Lunch"
  };
  const mapStateToProps = state => state;
  const mapDispatchToProps = dispatch => ({
    clickDispatcher() {
      dispatch(action);
    }
  });
  const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Menu);
  const component = shallowWithStore(<ConnectedComponent />, Store).dive();
  component.props().clickDispatcher(action);
  expect(component.props().entry).toEqual([]);
});
