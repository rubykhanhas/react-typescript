import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function Container(props) {
  const { breakPoint } = props;

  let _classList = "container";
  _classList += breakPoint == "sm" ? "-sm" : "";
  _classList += breakPoint == "md" ? "-md" : "";
  _classList += breakPoint == "lg" ? "-lg" : "";
  _classList += breakPoint == "xl" ? "-xl" : "";

  return <div className={_classList}>{props.children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  breakPoint: PropTypes.string,
};

export default Container;
