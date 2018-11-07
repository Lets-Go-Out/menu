import Truncate from "react-truncate";
import React from "react";
import PropTypes from "prop-types";
import Styles from "./css/specialentries.css";

class Specialentry extends React.Component {
  constructor(props) {
    super(props);
    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
    this.state = {
      expanded: false,
      truncated: false
    };
  }
  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded
    });
  }
  render() {
    const { more, less, lines } = this.props;
    const obj = {
      display: "block",
      fontSize: "1.17em",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px"
    };
    const { expanded, truncated } = this.state;
    return (
      <div className={Styles.column}>
        <p className={Styles.headcontent}>{this.props.head}</p>
        <Truncate
          className={Styles.bodycontent}
          lines={!expanded && lines}
          ellipsis={
            <span>
              ...
              <a className={Styles.readmore} onClick={this.toggleLines}>
                {more}
              </a>
            </span>
          }
          onTruncate={this.handleTruncate}
        >
          <div className={Styles.bodycontent}>{this.props.body}</div>
        </Truncate>
        {!truncated &&
          expanded && (
            <span>
              <a className={Styles.readmore} onClick={this.toggleLines}>
                {less}
              </a>
            </span>
          )}
      </div>
    );
  }
}
Specialentry.defaultProps = {
  lines: 3,
  more: "Read more",
  less: "Show less"
};
Specialentry.propTypes = {
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string
};
export default Specialentry;
