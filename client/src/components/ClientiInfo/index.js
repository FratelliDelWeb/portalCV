import React, { useState, useEffect } from "react";
import { getUsersInfo } from "service/users.service";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";

const ClientiInfo = ({Cliente,setTab}) => {

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
            Informazioni : 
             </MDTypography>
        <Grid   container xs={12} md={12} xl={12} spacing={1} >
            <Grid item xs={6} md={6} xl={6} >
            <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"   color="text">
                        ID:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.id}
                    </MDTypography>
                    </MDBox>
            <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"   color="text">
                        Nome:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.name}
                    </MDTypography>
                    </MDBox>
                    <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"   color="text">
                        Cognome:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.cognome}
                    </MDTypography>
                    </MDBox>
                    <MDBox mb={1} display="flex"  alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  color="text">
                        Email:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.email}
                    </MDTypography>
                    </MDBox>

                    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Cellulare:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.cellulare} 
                    </MDTypography>
                    </MDBox>
            

                    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Telefono:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.telefono}
                    </MDTypography>
                    </MDBox>

                {/*  <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Indirizzo:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.Indirizzo} - {row.Località} - {row.CAP} {row.Provincia}

                    </MDTypography>
                    </MDBox> */}

                {/* 
                    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Contattabile:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.Contattabile}
                    </MDTypography>
                    </MDBox> */}
                {/*    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        idContratto:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.ContattoID}
                    </MDTypography>
                    </MDBox> */}
                
                {/*   <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Data di nascita:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.DataNascita}
                    </MDTypography>
                    </MDBox>
            
                    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Data Richiamo:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.DataRichiamo}                                   </MDTypography>
                    </MDBox>

                    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Data aggiornamento Saldo:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.DataAggiornamentoSaldo}                                 </MDTypography>
                    </MDBox>
                
                    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Fax:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.Fax}
                    </MDTypography>
                    </MDBox> */}

            {/* 
                    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        IBAN:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.IBAN}
                    </MDTypography>
                    </MDBox>

            
                    <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                        Importo Rata:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.ImportoRata}                                </MDTypography>
                    </MDBox> */}
            </Grid>
            <Grid item xs={6} md={6} xl={6} >
            <MDBox mb={1} display="flex" alignItems="center" lineHeight={0}>        
                    <MDTypography variant="button" fontWight="bold"  alignItems="center" color="text">
                    DataCandidatura:&nbsp;
                    </MDTypography>
                    <MDTypography variant="button">
                    {row.created_at} 
                    </MDTypography>
                    </MDBox>

            <MDTypography mt={1}
            mb={1.5}
            variant="button" fontWight="bold"
            display="block"
            lineHeight={1.50}
            fontWeight="bold"
        >
           Scarica il Curriculum CV allegato dal candidato
             </MDTypography>
            <MDButton color="light" onClick={() => setTab(null,2)} p={1} >
            <Icon>contact_page</Icon>&nbsp;  Scarica CV 
            </MDButton>

                </Grid> 
              {/*   <Grid item xs={12} display="flex" alignItems="flex-end" md={12} xl={12} >

                
            <MDButton color="light" onClick={() => setTab(null,2)} p={1} >
            <Icon>edit</Icon>&nbsp;  Mocdifica 
            </MDButton>
            <MDButton color="error"  p={1}>
            <Icon>call</Icon>&nbsp;   Chiama
            </MDButton>

                </Grid> */}
</Grid>
            </MDBox>
        )
     })}
</MDBox>)
}
ClientiInfo.propTypes = {
  
    Cliente: PropTypes.object,
    setTab: PropTypes.func
  };


export default ClientiInfo