import React from "react";
import "./Wrapper.styles.css";

const Wrapper = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Wrapper;
