import React from "react";
import { connect } from "react-redux";

class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const viewFullStyle = {
      textAlign: "center",
      borderBottom: "1px solid #d8d9db",
      paddingBottom: "40px"
    };
    return (
      <div>
        <div id={this.props.viewmode === "container-1" ? "blocker" : ""} />
        <div style={viewFullStyle}>
          <button
            id={
              this.props.viewmode === "container-1" ? "viewFull" : "viewFull2"
            }
            onClick={this.props.viewModeChange}
          >
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
      dispatch({ type: "VIEWCHANGE" });
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
