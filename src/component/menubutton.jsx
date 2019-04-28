import React from "react";
import { connect } from "react-redux";
import Styles from "./css/menubutton.css";
import menu from "./menu";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    this.props.clickDispatcher(this.props.item, this.props.restaurantID); //tells us the button's value
  }
  render() {
    return (
      <button
        className={
          this.props.item === this.props.selected
            ? Styles.MenuNavButton2
            : Styles.MenuNavButton
        }
        onClick={this.clickHandler}
      >
        {this.props.item}
      </button>
    );
  }
}

//http://127.0.0.1:3001/restaurants/${restaurantID}/menu/
//http://ec2-18-144-4-173.us-west-1.compute.amazonaws.com:3001/restaurants/${restaurantID}/menu/
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickDispatcher: (selected, restaurantID) => {
      let url = `/restaurants/${restaurantID}/menu/`;
      let option = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };
      selected = selected.replace(" ", "_");
      fetch(url + selected, option)
        .then(response => response.json())
        .then(allMenus => {
          let unparsedMenuData = (allMenus.split("}{"))
          let parsedMenuData = JSON.parse(unparsedMenuData)
          let arrayFromParsedMenuData = []
          let menuTypes = []
          for(var key in parsedMenuData){
            arrayFromParsedMenuData.push(parsedMenuData[key])
            menuTypes.push(key)
          }
          let menuTypesWithCapitals = menuTypes.map(menuName => (menuName[0].toUpperCase() + menuName.slice(1)))
          let indexOfSelected = menuTypesWithCapitals.indexOf(selected)
          let desiredMenu = arrayFromParsedMenuData[indexOfSelected]

          let finalArrayToBeReturned = [];

          for(var i = 0; i < 10; i++){
            let outerMenuItem = {
            [`${menuTypesWithCapitals[0]}`]: {}
            };
            outerMenuItem.restaurantID = restaurantID;
            outerMenuItem[`${menuTypesWithCapitals[0]}`].description = desiredMenu[`item${i}`].menuDescription;
            outerMenuItem[`${menuTypesWithCapitals[0]}`].ingredients = desiredMenu[`item${i}`].ingredients;
            outerMenuItem[`${menuTypesWithCapitals[0]}`].menu = menuTypes[0];
            outerMenuItem[`${menuTypesWithCapitals[0]}`].name = desiredMenu[`item${i}`].menuItem;
            outerMenuItem[`${menuTypesWithCapitals[0]}`].price = desiredMenu[`item${i}`].price;

            finalArrayToBeReturned.push(outerMenuItem);
          }
          dispatch({
            type: "FETCHDATA",
            selected,
            finalArrayToBeReturned
          });
        });
    }
  };
}


// export const fetchMenuData = (restaurantID, fetchMenuData, fetchData) => {
//   fetch(url + restaurantID + "/menuCount", option)
//     .then(response => response.json())
//     .then(allMenus => {
//       let unparsedMenuData = (allMenus.split("}{"))
//       let parsedMenuData = JSON.parse(unparsedMenuData)
//       let arrayFromParsedMenuData = []
//       let menuTypes = []
//       for(var key in parsedMenuData){
//         arrayFromParsedMenuData.push(parsedMenuData[key])
//         menuTypes.push(key)
//       }
//       let firstMenuType = arrayFromParsedMenuData[0]
//       let menuTypesWithCapitals = menuTypes.map(menuName => (menuName[0].toUpperCase() + menuName.slice(1)))
//       let finalArrayToBeReturned = [];

//       for(var i = 0; i < 10; i++){

//         let outerMenuItem = {
//         [`${menuTypesWithCapitals[0]}`]: {}
//         };
//         outerMenuItem.restaurantID = restaurantID;

//         outerMenuItem[`${menuTypesWithCapitals[0]}`].description = firstMenuType[`item${i}`].menuDescription;
//         outerMenuItem[`${menuTypesWithCapitals[0]}`].ingredients = firstMenuType[`item${i}`].ingredients;
//         outerMenuItem[`${menuTypesWithCapitals[0]}`].menu = menuTypes[0];
//         outerMenuItem[`${menuTypesWithCapitals[0]}`].name = firstMenuType[`item${i}`].menuItem;
//         outerMenuItem[`${menuTypesWithCapitals[0]}`].price = firstMenuType[`item${i}`].price;

//         finalArrayToBeReturned.push(outerMenuItem);
//       }
//       fetchMenuData(menuTypesWithCapitals)
//       fetchData(finalArrayToBeReturned, menuTypesWithCapitals[0]);
//   });
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
