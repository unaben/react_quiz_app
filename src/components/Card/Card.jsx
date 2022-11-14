import React from "react";
import "../Card/Card.styles.css";

const Cards = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Cards;
