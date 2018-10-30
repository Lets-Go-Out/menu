import React from "react";
import { connect } from "react-redux";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    var container = document.getElementsByClassName("container-2");
    if (container.length) {
      var offset = container[0].offsetHeight;
      var offset2 = container[0].offsetTop;
    }
    if (
      container.length &&
      (window.scrollY > offset + 300 || window.scrollY < offset2 - 500)
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
          <button id={this.props.viewFull} onClick={this.props.viewModeChange}>
            View Full Menu
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
