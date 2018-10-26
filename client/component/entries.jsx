import React from "react";

const entries = props => {
  let selected = props.selected;
  return (
    <div className="entryContainer">
      <div className="title">
        {props.item[selected].name}
        <span className="price">{props.item[selected].price}</span>
      </div>
      <div />
      <div>{props.item[selected].description}</div>
    </div>
  );
};

export default entries;
