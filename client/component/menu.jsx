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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let url = "http://127.0.0.1:3000/menu/" + this.props.selected;
    let option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, option)
      .then(response => response.json())
      .then(data => {
        this.props.fetchData(data);
      });
  }

  handleClick(e) {}

  render() {
    if (this.props.entry.length > 1) {
      var mid = Math.ceil(this.props.entry.length / 2);
    }
    return (
      <div>
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
                  <Entries key={i} item={e} />
                ))}
              </div>
              <div className="rightContainer">
                {this.props.entry.slice(mid).map((e, i) => (
                  <Entries key={i} item={e} />
                ))}
              </div>
            </div>
          </div>
          <View />
        </div>
        <div class="greyline">
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
    fetchData: data => dispatch({ type: "FETCHDATA", data }),
    viewModeChange: () => dispatch({ type: "VIEWCHANGE" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
