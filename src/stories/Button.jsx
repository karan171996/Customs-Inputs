import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({
  title,
  varient,
  boxShadow,
  size,
  backgroundColor,
}) => {
  return (
    <button
      style={{
        boxShadow: boxShadow ? "0px 2px 3px rgba(51, 51, 51, 0.2)" : "none",
        backgroundColor,
      }}
      className={`${varient} ${size}`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  varient: PropTypes.string,
  boxShadow: PropTypes.bool,
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
};
