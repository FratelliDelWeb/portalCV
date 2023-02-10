import React, { useState, useEffect } from "react";
import axios from 'axios';
import { modifyClient } from "service/clients.service";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";
import  MDInput  from 'components/MDInput';
const SelectProvincia = () => {
    
    return(<>
    
    <FormControl >
<InputLabel id="demo-simple-select-label">Provincia</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value= {10}
label="Provincia"

>
<MenuItem value={10}>Ten</MenuItem>
<MenuItem value={20}>Twenty</MenuItem>
<MenuItem value={30}>Thirty</MenuItem>
</Select>
</FormControl>
    </>
      
    )
}


SelectProvincia.propTypes = {
  
    Provincie: PropTypes.object,
 
  };


export default SelectProvincia
