import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function Col(props) {
  const { span, sm, md, lg, xl } = props;
  let _classList = `col-${span}`;

  _classList += sm ? ` col-sm-${sm}` : "";
  _classList += md ? ` col-md-${md}` : "";
  _classList += lg ? ` col-lg-${lg}` : "";
  _classList += xl ? ` col-xl-${xl}` : "";

  return <div className={_classList}>{props.children}</div>;
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  span: function (prop, propName, componentName) {
    if (prop[propName] < 1 || prop[propName] > 12) {
      return new Error(`${componentName}:${propName} must be >= 1 and <= 12`);
    }
    if (prop[propName] == undefined)
      return new Error(`${componentName}:${propName} is required`);
  },
  sm: function (prop, propName, componentName) {
    if (prop[propName] < 1 || prop[propName] > 12) {
      return new Error(`${componentName}:${propName} must be >= 1 and <= 12`);
    }
  },
  md: function (prop, propName, componentName) {
    if (prop[propName] < 1 || prop[propName] > 12) {
      return new Error(`${componentName}:${propName} must be >= 1 and <= 12`);
    }
  },
  lg: function (prop, propName, componentName) {
    if (prop[propName] < 1 || prop[propName] > 12) {
      return new Error(`${componentName}:${propName} must be >= 1 and <= 12`);
    }
  },
  xl: function (prop, propName, componentName) {
    if (prop[propName] < 1 || prop[propName] > 12) {
      return new Error(`${componentName}:${propName} must be >= 1 and <= 12`);
    }
  },
};

export default Col;
