import React from "react";
import PropTypes from "prop-types";

export default function NumberInputText({ currentNumber, handleOnChange }) {
  return (
    <div className="input-group input-group-sm">
      <input
        type="tel"
        className="form-control"
        placeholder="555-666-7777"
        value={currentNumber}
        onChange={handleOnChange}
      />
    </div>
  );
}

NumberInputText.propTypes = {
  currentNumber: PropTypes.any,
  handleOnChange: PropTypes.any,
};
