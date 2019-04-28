import React from "react";
import styles from "./css/entries.css";

const entries = props => {
  let selected = props.selected;
  return (
    <div className={styles.entryContainer}>
      <div className={styles.title}>
        {props.item[selected].name}
        <span className={styles.price}>{props.item[selected].price}</span>
      </div>
      <div />
      <div className={styles.description}>
        {props.item[selected].description}
      </div>
    </div>
  );
};

export default entries;
