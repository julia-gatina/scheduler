import React from "react";

/**
 * header of an appointment, displays time
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (props) => {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator"/>
    </header>
  );
};

export default Header;