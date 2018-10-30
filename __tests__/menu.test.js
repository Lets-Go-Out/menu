import React from "react";
import { connect } from "react-redux";
import { shallowWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import Menu from "../src/component/menu.jsx";

describe("example shallowWithStore", () => {
  const ReactComponent = () => <div>dummy component</div>;
  describe("state", () => {
    it("works", () => {
      const expectedState = {
        navmenu: ["Lunch", "Dinner", "Brunch", "Happy Hour"],
        selected: "Lunch", //need to use Caps
        viewmode: "container-1",
        viewFull: "viewFull", //view Button
        restaurantID: 1,
        entry: []
      };
      const mapStateToProps = state => ({
        state
      });
      const ConnectedComponent = connect(mapStateToProps)(Menu);
      const component = shallowWithStore(
        <ConnectedComponent />,
        createMockStore(expectedState)
      );
      expect(component.props().state).toBe(expectedState);
    });
  });
});
