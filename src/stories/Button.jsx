import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Button = ({
  title,
  varient,
  boxShadow,
  size,
  backgroundColor,
  disabledButton,
  iconPosition,
}) => {
  console.log("disabledButton", disabledButton);
  return (
    <button
      disabled={disabledButton}
      style={{
        boxShadow: boxShadow ? "0px 2px 3px rgba(51, 51, 51, 0.2)" : "none",
      }}
      className={`${varient} ${size} ${backgroundColor}`}
    >
      <div className="text-section">
        {iconPosition === "left" && <AiOutlineShoppingCart />}
        {title}
        {iconPosition === "right" && <AiOutlineShoppingCart />}
      </div>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  varient: PropTypes.string,
  boxShadow: PropTypes.bool,
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabledButton: PropTypes.bool,
  iconPosition: PropTypes.string,
};
