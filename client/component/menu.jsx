import React from "react";
import style from "style";
import MenuButtons from "./menubutton.jsx";
import Entries from "./entries.jsx";

const infoStyle = {
  float: "left",
  width: "50%",
  height: "50%",
  borderStyle: "solid",
  borderWidth: "2px",
  textAlign: "center"
};

export default class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      navmenu: ["Lunch", "Dinner", "Brunch", "Happy Hour"],
      selected: "lunch",
      entry: [
        {
          ID: "01",
          menu: "lunch",
          name: "Albany, NY",
          price: "Brand New",
          description: "CanonEOS 40d"
        }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let url = "http://127.0.0.1:3000/menu/" + this.state.selected;
    let option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, option)
      .then(response => response.json())
      .then(data => {
        let obj = Object.assign({}, this.state);
        obj.entry = data;
        this.setState(obj);
      });
  }

  handleClick(e) {}

  render() {
    const viewFullStyle = {
      textAlign: "center",
      borderBottom: "1px solid #d8d9db",
      paddingBottom: "40px"
    };
    if (this.state.entry.length > 1) {
      var mid = Math.ceil(this.state.entry.length / 2);
    }
    return (
      <div>
        <h2>Menu</h2>
        <nav id="menuNav">
          {this.state.navmenu.map((e, i) => (
            <MenuButtons key={i} item={e} />
          ))}
        </nav>
        <div className="container">
          <div className="leftContainer">
            {this.state.entry.slice(0, mid).map((e, i) => (
              <Entries key={i} item={e} />
            ))}
          </div>
          <div className="rightContainer">
            {this.state.entry.slice(mid).map((e, i) => (
              <Entries key={i} item={e} />
            ))}
          </div>
        </div>
        <div style={viewFullStyle}>
          <button id="viewFull">View Full Menu</button>
        </div>
      </div>
    );
  }
}
