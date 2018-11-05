import React, { Component } from "react";
import { connect } from "react-redux";
import { wholeRestaurantChange } from "../APICalls/fetch.js";
import styles from "./css/cheats.css";

class Cheats extends Component {
  constructor(props) {
    super(props);
    this.wholeChange = this.wholeChange.bind(this);
  }
  wholeChange(n) {
    let current = Number(this.props.restaurantID);
    let next = current + n;
    if (next < 0) {
      next = 0;
    } else if (next > 100) {
      next = 100;
    }
    wholeRestaurantChange(next, this.props.wholeChange);
  }
  render() {
    return (
      <div id={styles.hidden}>
        <button onClick={() => this.wholeChange(-1)}>Previous</button>
        <button onClick={() => this.wholeChange(1)}>Next</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    wholeChange: (restaurantID, selected, entry, navmenu, special) =>
      dispatch({
        type: "WHOLECHANGE",
        restaurantID,
        selected,
        entry,
        navmenu,
        special
      })
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cheats);
