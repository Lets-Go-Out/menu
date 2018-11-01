import React from "react";
import { View } from "../src/component/view.jsx";
import { Menu } from "../src/component/menu.jsx";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import configureStore from "redux-mock-store";
import Store from "../src/component/storage/store.js";
import fetch from "isomorphic-fetch"; //do not remove this!!! you need it for the stupid fetch that node doesn't have

describe("menu is rendering other components", () => {
  const entry = [
    {
      name: "blabla",
      restaurantID: "1",
      description: "ksldfjlsfjl;ka;dsfjkl;ajdfk;lja;lkdfj;aljfd;sa;fj",
      ingredients: ["chicken", "beans"],
      price: "$11.11",
      menu: "Lunch"
    }
  ];
  const navmenu = ["Lunch", "Dinner", "Breakfast"];
  const wrapper = shallow(
    <Menu store={Store} entry={entry} navmenu={navmenu} />
  );
  const mockFunc = jest.fn();
  const wrapper2 = shallow(
    <View
      store={Store}
      entry={entry}
      navmenu={navmenu}
      viewFull="View Full"
      viewModeChange={mockFunc}
    />
  );
  it("menu is rendering view", () => {
    expect(wrapper.find("Connect(View)")).toBeTruthy();
  });
  test("view is rendering its containers", () => {
    wrapper2.find("button").simulate("click");
    expect(mockFunc).toHaveBeenCalled();
  });
  test("entries presents?", () => {
    const entry = [
      {
        restaurantID: 1,
        Lunch: {
          name: "blabla",
          restaurantID: "1",
          description: "ksldfjlsfjl;ka;dsfjkl;ajdfk;lja;lkdfj;aljfd;sa;fj",
          ingredients: ["chicken", "beans"],
          price: "$11.11",
          menu: "Lunch",
          selected: "Lunch"
        }
      },
      {
        restaurantID: 1,
        Lunch: {
          name: "sldfjl;",
          restaurantID: "1",
          description: "ksldfjlsfjl;ka;dsfjkl;ajdfk;lja;lkdfj;aljfd;sa;fj",
          ingredients: ["beef", "beans"],
          price: "$31.11",
          menu: "Lunch",
          selected: "Lunch"
        }
      }
    ];

    const wrapper3 = shallow(
      <Menu store={Store} entry={entry} navmenu={navmenu} />
    );
    expect(wrapper3.find(".container").children()).toHaveLength(2);
    expect(
      wrapper3
        .find(".container")
        .childAt(0)
        .childAt(0)
        .find("entries")
        .props()
    ).toHaveProperty("item.Lunch.menu", "Lunch");
  });
});
