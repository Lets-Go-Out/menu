import React from "react";
import { connect } from "react-redux";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    //event.preventDefault();
    this.props.clickDispatcher(this.props.item, this.props.restaurantID); //tells us the button's value
  }
  render() {
    return (
      <button
        className={
          "menu-nav" +
          (this.props.item === this.props.selected ? " selected" : "")
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
    clickDispatcher: (value, restaurantID) => {
      let url = `http://127.0.0.1:3001/restaurants/${restaurantID}/menu/`;
      let option = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };
      value = value.replace(" ", "_");
      fetch(url + value, option)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: "MENUBUTTON_CLICK",
            value,
            data
          });
        });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
