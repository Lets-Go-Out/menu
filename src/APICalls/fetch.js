let url = "http://127.0.0.1:3001/restaurants/";
let option = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};
export const fetchMenuData = (restaurantID, fetchMenuData, fetchData) => {
  fetch(url + restaurantID + "/menuCount", option)
    .then(response => response.json())
    .then(data => {
      fetch(url + restaurantID + "/menu/" + data[0], option)
        .then(response1 => response1.json())
        .then(data1 => {
          fetchMenuData(data);
          fetchData(data1, data[0]);
        });
    });
};

export const wholeRestaurantChange = (restaurantID, wholeChange) => {
  fetch(url + restaurantID + "/menuCount", option)
    .then(response => {
      return response.json();
    })
    .then(data => {
      fetch(url + restaurantID + "/menu/" + data[0], option)
        .then(response1 => response1.json())
        .then(data1 => {
          wholeChange(restaurantID, data[0], data1, data); //data is the [array of menus] data1 is an array of entries
        });
    });
};
