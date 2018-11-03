import React from "react";
import MenuButtons from "./menubutton.jsx";
import Entries from "./entries.jsx";
import View from "./view.jsx";
import { connect } from "react-redux";
import { fetchMenuData } from "../APICalls/fetch.js";
import Cheats from "./cheats.jsx";

const infoStyle = {
  float: "left",
  width: "50%",
  height: "50%",
  borderStyle: "solid",
  borderWidth: "2px",
  textAlign: "center"
};

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchMenuData(
      this.props.restaurantID,
      this.props.fetchMenuData,
      this.props.fetchData
    );
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
          <Cheats />
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: (entry, selected) =>
      dispatch({ type: "FETCHDATA", entry, selected }),
    fetchMenuData: data1 => dispatch({ type: "FETCHMENUDATA", data1 }),
    viewModeChange: () => dispatch({ type: "VIEWCHANGE" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
