import React from "react";
import PropTypes from "prop-types";

export default function LogBox({ text, smallText }) {
  return (
    <div>
      <div className="log">{text}</div>
      <p>{smallText}</p>
    </div>
  );
}

// Typechecking props for the DataTableHeadCell
LogBox.propTypes = {
  text: PropTypes.any,
  smallText: PropTypes.any,
};
