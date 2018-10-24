import React from "react";

const entries = props => {
  return (
    <div className="entryContainer">
      <div className="title">
        {props.item.name}
        <span className="price">{props.item.price}</span>
      </div>
      <div />
      <div>{props.item.description}</div>
    </div>
  );
};

export default entries;
