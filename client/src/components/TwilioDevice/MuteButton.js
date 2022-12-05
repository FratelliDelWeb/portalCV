import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

export default function MuteButton({ muted, handleOnClick }) {
  return (
    <button className="btn btn-circle btn-default" onClick={handleOnClick}>
      <i
        className={
          "fa fa-fw fa-microphone " +
          (muted ? "fa-microphone-slash" : "fa-microphone")
        }
      ></i>
    </button>
  );
}

MuteButton.propTypes = {
  muted: PropTypes.any,
  handleOnClick: PropTypes.any,
};
