// let url = "http://127.0.0.1:3001/restaurants/";
let url = '/restaurants/'
let option = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchMenuData = (restaurantID, fetchMenuData, fetchData) => {
  fetch(url + restaurantID + "/menuCount", option)
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
      let firstMenuType = arrayFromParsedMenuData[0]
      let menuTypesWithCapitals = menuTypes.map(menuName => (menuName[0].toUpperCase() + menuName.slice(1)))
      let finalArrayToBeReturned = [];

      for(var i = 0; i < 10; i++){

        let outerMenuItem = {
        [`${menuTypesWithCapitals[0]}`]: {}
        };
        outerMenuItem.restaurantID = restaurantID;

        outerMenuItem[`${menuTypesWithCapitals[0]}`].description = firstMenuType[`item${i}`].menuDescription;
        outerMenuItem[`${menuTypesWithCapitals[0]}`].ingredients = firstMenuType[`item${i}`].ingredients;
        outerMenuItem[`${menuTypesWithCapitals[0]}`].menu = menuTypes[0];
        outerMenuItem[`${menuTypesWithCapitals[0]}`].name = firstMenuType[`item${i}`].menuItem;
        outerMenuItem[`${menuTypesWithCapitals[0]}`].price = firstMenuType[`item${i}`].price;

        finalArrayToBeReturned.push(outerMenuItem);
      }
      fetchMenuData(menuTypesWithCapitals)
      fetchData(finalArrayToBeReturned, menuTypesWithCapitals[0]);
  });
};

export const wholeRestaurantChange = (restaurantID, wholeChange) => {
  fetch(url + restaurantID + "/menuCount", option)
    .then(response => response.json())
    .then(nameOfMenus => {
      fetch(url + restaurantID + "/menu/" + nameOfMenus[0], option)
        .then(response1 => response1.json())
        .then(allMenusForRestaurant => {
          fetch(url + restaurantID + "/special", option)
            .then(response2 => response2.json())
            .then(specialsForRestaurant =>
              wholeChange(restaurantID, nameOfMenus[0], allMenusForRestaurant, nameOfMenus, specialsForRestaurant)
            );
        });
    });
};

export const fetchSpecial = (restaurantID, fetchspecial) => {
  fetch(url + restaurantID + "/special", option)
    .then(response => response.json())
    .then(allMenus => {
      let unparsedMenuData = (allMenus.split("}{"))
      let parsedMenuData = JSON.parse(unparsedMenuData)
      var specialMenus = parsedMenuData.special
      let specialArr = [];
      for(var i = 0; i < 6; i++){
        let newFormattedSpecial = {}
        newFormattedSpecial.head = specialMenus[`item${i}`].specialName
        newFormattedSpecial.body = specialMenus[`item${i}`].description
        newFormattedSpecial.restaurantID = restaurantID
        specialArr.push(newFormattedSpecial)
      }
      fetchspecial(specialArr);
    });
};
