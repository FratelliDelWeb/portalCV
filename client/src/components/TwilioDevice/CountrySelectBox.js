import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

export default function CountrySelectBox({ countries, handleOnChange }) {
  return countries.map(function (country) {
    var flagClass = "flag flag-" + country.code;

    return (
      <li key={country.cc}>
        <a href="#" onClick={() => handleOnChange(country.cc)}>
          <div className={flagClass}></div>
          <span>
            {" "}
            {country.name} (+{country.cc})
          </span>
        </a>
      </li>
    );
  });
}

// Typechecking props for the DataTableHeadCell
CountrySelectBox.propTypes = {
  countries: PropTypes.any,
  handleOnChange: PropTypes.any,
};
