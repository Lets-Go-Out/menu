import React from "react";
import { connect } from "react-redux";
import Styles from "./css/menubutton.css";

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

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickDispatcher: (selected, restaurantID) => {
      let url = `http://127.0.0.1:3001/restaurants/${restaurantID}/menu/`;
      let option = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };
      selected = selected.replace(" ", "_");
      fetch(url + selected, option)
        .then(response => response.json())
        .then(entry => {
          dispatch({
            type: "FETCHDATA",
            selected,
            entry
          });
        });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
