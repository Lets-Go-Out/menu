import Redux from "redux";
import { callbackify } from "util";

const initialState = {
  navmenu: ["Lunch", "Dinner", "Brunch", "Happy Hour"],
  selected: "Lunch", //need to use Caps
  viewmode: "container-1",
  viewFull: "viewFull", //view Button
  restaurantID: 1,
  entry: [],
  special: []
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHDATA":
      let obj0 = Object.assign({}, state);
      obj0.selected = action.selected;
      obj0.entry = action.entry;
      return obj0;
    case "FETCHMENUDATA":
      let obj = Object.assign({}, state);
      obj.navmenu = action.data1;
      return obj;
    case "VIEWCHANGE":
      let obj2 = Object.assign({}, state);
      obj2.viewmode =
        state.viewmode === "container-1" ? "container-2" : "container-1";
      obj2.viewFull =
        obj2.viewmode === "container-1" ? "viewFull" : "viewFull2";
      return obj2;
    case "BUTTONCHANGE":
      let obj3 = Object.assign({}, state);
      obj3.viewFull = "viewFull";
      return obj3;
    case "RESTAURANT_ID":
      let obj4 = Object.assign({}, state);
      obj4.restaurantID = action.restaurantID;
      return obj4;
    case "WHOLECHANGE":
      let wholechange = Object.assign({}, state);
      wholechange.restaurantID = action.restaurantID;
      wholechange.selected = action.selected;
      wholechange.entry = action.entry;
      wholechange.viewmode = "container-1";
      wholechange.viewFull = "viewFull";
      wholechange.navmenu = action.navmenu;
      wholechange.special = action.special;
      return wholechange;
    case "SPECIAL":
      let obj5 = Object.assign({}, state);
      obj5.special = action.special;
      return obj5;
    default:
      return state;
  }
};

export default Reducers;
