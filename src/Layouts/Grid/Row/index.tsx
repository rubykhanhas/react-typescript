import React from "react";
import PropTypes from 'prop-types';
import "./index.scss";

function Row(props) {
  return <div className="row">{props.children}</div>;
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
