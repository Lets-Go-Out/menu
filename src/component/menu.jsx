import React from "react";
import style from "style";
import MenuButtons from "./menubutton.jsx";
import Entries from "./entries.jsx";
import store from "./storage/store.js";
import View from "./view.jsx";
import { connect } from "react-redux";

const infoStyle = {
  float: "left",
  width: "50%",
  height: "50%",
  borderStyle: "solid",
  borderWidth: "2px",
  textAlign: "center"
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(
      "http://127.0.0.1:3001/restaurants/" +
        this.props.restaurantID +
        "/menuCount",
      option
    )
      .then(response => response.json())
      .then(data => {
        this.props.fetchMenuData(data);
        fetch(
          "http://127.0.0.1:3001/restaurants/" +
            this.props.restaurantID +
            "/menu/" +
            this.props.navmenu[0],
          option
        )
          .then(response1 => response1.json())
          .then(data1 => {
            this.props.fetchData(data1, this.props.navmenu[0]);
          });
      });
  }

  render() {
    if (this.props.entry.length > 1) {
      var mid = Math.ceil(this.props.entry.length / 2);
    } else {
      var mid = 1;
    }
    return (
      <div className="MotherContainer">
        <div className="OtherComponents" />
        <div>
          <h2>Menu</h2>
          <nav id="menuNav">
            {this.props.navmenu.map((e, i) => (
              <MenuButtons key={i} item={e} />
            ))}
          </nav>
          <div className={this.props.viewmode}>
            <div className="container">
              <div className="leftContainer">
                {this.props.entry.slice(0, mid).map((e, i) => (
                  <Entries key={i} item={e} selected={this.props.selected} />
                ))}
              </div>
              <div className="rightContainer">
                {this.props.entry.slice(mid).map((e, i) => (
                  <Entries key={i} item={e} selected={this.props.selected} />
                ))}
              </div>
            </div>
            <div id={this.props.viewmode === "container-1" ? "blocker" : ""} />
          </div>
          <View />
        </div>
        <div className="greyline">
          <h2>Special</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: (data, selected) =>
      dispatch({ type: "FETCHDATA", data, selected }),
    fetchMenuData: data1 => dispatch({ type: "FETCHMENUDATA", data1 }),
    viewModeChange: () => dispatch({ type: "VIEWCHANGE" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
