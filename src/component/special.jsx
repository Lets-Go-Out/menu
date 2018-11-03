import React from "react";
import { connect } from "react-redux";
import { fetchSpecial } from "../APICalls/fetch.js";
import Specialentries from "./specialentries.jsx";

class Special extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetchSpecial(this.props.restaurantID, this.props.fetchSpecial);
  }
  render() {
    console.log(this.props);
    if (this.props.special.length) {
      return (
        <div>
          <h2>Special</h2>
          <div className="row">
            {this.props.special.map((e, i) => (
              <Specialentries head={e.head} key={i} body={e.body} />
            ))}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    fetchSpecial: special => dispatch({ type: "SPECIAL", special })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Special);
