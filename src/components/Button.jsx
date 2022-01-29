import React from "react";
import classNames from "classnames";
import "components/Button.scss";

/**
 * button component, used for all buttons of the app
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Button = (props) => {
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;