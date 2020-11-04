import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function Fluid(props) {
  return <div className="container-fluid">{props.children}</div>;
}

Fluid.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Fluid;
