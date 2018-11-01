import React from "react";
import { Menu } from "../src/component/menu.jsx";
import { shallow, mount } from "enzyme";
import fetch from "isomorphic-fetch"; //do not remove this!!! you need it for the stupid fetch that node doesn't have

const props = {
  navmenu: ["Lunch", "Dinner", "Brunch", "Happy Hour"],
  selected: "Lunch", //need to use Caps
  viewmode: "container-1",
  viewFull: "viewFull", //view Button
  restaurantID: 1,
  entry: [
    {
      name: "blabla",
      restaurantID: "1",
      description: "ksldfjlsfjl;ka;dsfjkl;ajdfk;lja;lkdfj;aljfd;sa;fj",
      ingredients: ["chicken", "beans"],
      price: "$11.11",
      menu: "Lunch"
    }
  ]
};
function setup() {
  const enzymeWrapper = shallow(<Menu {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
function setupmount() {
  const enzymeWrapper = mount(<Menu {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("components", () => {
  it("should contain View", () => {
    const { enzymeWrapper } = setup();
    const menuButtons = enzymeWrapper
      .find("Connect(Button)")
      .first()
      .props();
    expect(menuButtons.item).toBe("Lunch");
  });
});
