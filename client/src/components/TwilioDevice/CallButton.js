import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

export default function CallButton({ onPhone, handleOnClick, disabled }) {
  return (
    <button
      className={
        "btn btn-circle btn-success " + (onPhone ? "btn-danger" : "btn-success")
      }
      onClick={handleOnClick}
      disabled={disabled}
    >
      Clicca qui per chiamare
      <i className={"fa fa-fw fa-phone " + (onPhone ? "fa-close" : "fa-phone")}>
        icona
      </i>
    </button>
  );
}

// Typechecking props for the DataTableHeadCell
CallButton.propTypes = {
  onPhone: PropTypes.any,
  handleOnClick: PropTypes.any,
  disabled: PropTypes.any,
};
