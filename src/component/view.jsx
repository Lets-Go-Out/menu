import React from "react";
import { connect } from "react-redux";
import Styles from "./css/view.css";
import styles from "./css/menu.css";

export class View extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    var container = document.getElementsByClassName(`${styles["container-2"]}`);
    if (container.length) {
      var offset = container[0].offsetHeight;
      var offset2 = container[0].offsetTop;
    }
    if (
      container.length &&
      (window.scrollY > offset + 50 || window.scrollY < offset2 - 500)
    ) {
      this.props.viewChange();
    }
  }
  render() {
    const viewFullStyle = {
      textAlign: "center",
      borderBottom: "1px solid #d8d9db",
      paddingBottom: "40px"
    };
    return (
      <div>
        <div style={viewFullStyle}>
          <button
            id={Styles[this.props.viewFull]}
            onClick={this.props.viewModeChange}
          >
            {this.props.viewmode === "container-1" ? "View All" : "View Less"}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    viewModeChange: () => {
      dispatch({ type: "VIEWCHANGE" }); //this is actually view mode change
    },
    viewChange: () => {
      dispatch({ type: "BUTTONCHANGE" }); //this is actually the button change
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

// id={Styles[this.props.viewFull]}
