// let url = "http://127.0.0.1:3001/restaurants/";
let url = "/restaurants/";
let option = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchMenuData = (restaurantID, fetchMenuData, fetchData) => {
  fetch(url + restaurantID + "/menuCount", option)
    .then(response => response.json())
    .then(nameOfMenus => {
      fetch(url + restaurantID + "/menu/" + nameOfMenus[0], option)
        .then(response => response.json())
        .then(allMenusForRestaurant => {
          fetchMenuData(nameOfMenus);
          fetchData(allMenusForRestaurant, nameOfMenus[0]);
        });
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
    .then(arrayOfSpecialsMenuObjects => {
      fetchspecial(arrayOfSpecialsMenuObjects);
    });
};
