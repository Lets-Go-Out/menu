import React from "react";
import { connect } from "react-redux";
import { shallowWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import Menubutton from "../src/component/menubutton.jsx";
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
