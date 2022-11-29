import React, { useState, useEffect } from "react";
import { getUsersInfo } from "service/users.service";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";
import  MDInput  from 'components/MDInput';
const ClientiInfoEdit = ({Cliente,tab}) => {
    
 const [ClienteEdit , setClienteEdit] = useState([
    Denominazione
 ])

console.log(ClienteEdit)

return(<MDBox>
     {Cliente.user.map((row) => {
        return(
            <MDBox key={row.id}>
            <MDTypography mt={1}
            mb={1.5}
            variant="button" fontWight="bold"
            display="block"
            lineHeight={1.50}
            fontWeight="bold"
        >
            Modifica le informazioni del Cliente
        </MDTypography>
        <Grid container spacing={1} >
  <Grid item xs={6} md={6} xl={6} >
                        <MDBox mb={1} display="flex"   onChange={(e) => setClienteEdit({ Denominazione: e.target.value })} alignItems="center"lineHeight={0}>        
                        <MDInput id="inputName" type="text" label="Nome"  defaultValue={row.Denominazione} />
                                </MDBox>

                                <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                                <MDInput type="email" label="Email"    onChange={(e) => setClienteEdit({ Email: e.target.value })} defaultValue={row.Email} />  
                                 </MDBox>
                               
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="tel" label="Telefono"   defaultValue={row.Telefono1} />
                        </MDBox>

  </Grid>
  <Grid item xs={6} md={6} xl={6} >


    </Grid>


    <Grid item xs={12} display="flex" alignItems="flex-end" md={12} xl={12} >

      
<MDButton color="light"  p={1} >
<Icon>trash</Icon>&nbsp;  Elimina Cliente
</MDButton>
<MDButton color="error"  onClick={() => tab(null,0)}  p={1}>
<Icon>save</Icon>&nbsp;  Salva Modifiche
</MDButton>

  </Grid>


</Grid>
</MDBox>
        )
     })}
</MDBox>)
}
ClientiInfoEdit.propTypes = {
  
    Cliente: PropTypes.object,
    tab: PropTypes.func
  };


export default ClientiInfoEdit