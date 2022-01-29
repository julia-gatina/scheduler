import React from "react";

/**
 *
 * should be shown for an available spot, opens create form when clicked
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Empty = (props) => {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};

export default Empty;