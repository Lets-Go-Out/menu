import Menu from "./component/menu.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./component/storage/store.js";

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Menu />
    </Provider>
  </div>,
  document.getElementById("menu")
);
