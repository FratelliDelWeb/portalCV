import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import Loader from 'components/Loader';
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfilesList from "examples/Lists/ProfilesList";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { getClientInfo , getAllClient, modifyClient} from "service/clients.service";
// Overview page components
import Header from "layouts/profile/components/Header";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import MDButton from 'components/MDButton';
import  MDInput  from 'components/MDInput';
import ClientiInfo from "../../components/ClientiInfo"

const  ClientePage = () =>  {
// DETTAGLI  Cliente
const [profiloCliente,setProfiloCliente] =  useState({user:[]});
const DatiCliente = []
const [loading,setLoading] = useState(true);

  //set ID CLIENTE 
  const [QueryClienteId,setQueryClienteId ] = useState("inzio")

  //TAB 
  const [tabValue, setTabValue] = useState(0);
  const setTab = (event, newValue) => {
    
    console.log(event);
    console.log(newValue);
    setTabValue(newValue)};

 
    
 
    

  useEffect(() => {
    setIdCliente() 



  },[QueryClienteId])

  

// SET CHIAMATA PER RECUPERARE INFO  CLIENTE

  const setIdCliente =() => {
    const idTokenQuery = window.location.pathname.substring(9);
    setQueryClienteId(idTokenQuery);
    console.log(QueryClienteId)
    getClient();  
   }
   
   const getClient = async (profiloCliente) => {
    const data = await  getClientInfo(QueryClienteId);
    setDatiCliente(data);
    setProfiloCliente(() => ({
      ...profiloCliente,
      user: DatiCliente
    }));
    setLoading(false);
    console.log(DatiCliente)
}

const setValue= () =>{
console.log("valore");
}
// SET DATI CLIENTE
const setDatiCliente = (data) => {
    DatiCliente[0]= {
      id: data._id,
      nomeCliente: data.Denominazione,
      CAP:data.CAP,
      CAP2:data.CAP2,
      Categoria:data.Categoria,
      ClienteID: data.ClienteID,
      CodiceAgenzia: data.CodiceAgenzia,
      CodiceCliente:data.CodiceCliente,
     CodiceCollab: data.CodiceCollab,
    CodiceFiscale: data.CodiceFiscale,
    Contattabile:data.Contattabile,
    ContattoID:data.ContattoID,
    DataAggiornamentoSaldo:data.DataAggiornamentoSaldo,
    DataNascita:data.DataNascita,
    DataRichiamo:data.DataRichiamo,
    Denominazione:data.Denominazione,
    Email:data.Email,
    Fax:data.Fax,
    IBAN:data.IBAN,
    ImportoRata:data.ImportoRata,
    ImportoRataStorica:data.ImportoRataStorica,
    ImportoSaldoAttualizzato:data.ImportoSaldoAttualizzato,
    ImportoSaldoContabile:data.ImportoSaldoContabile,
    ImportoSaldoStorico:data.ImportoSaldoStorico,
    Indirizzo:data.Indirizzo,
    Indirizzo2:data.Indirizzo2,
    Località:data.Località,
    Località2:data.Località2,
    Note:data.Note,
    Operatore:data.Operatore,
    PartitaIVA:data.PartitaIVA,
    Provincia:data.Provincia,
    Provincia2:data.Provincia2,
    Sesso:data.Sesso,
    Telefono1:data.Telefono1,
    Telefono2:data.Telefono2,
    TipoCliente:data.TipoCliente,
    TipoContoStorico:data.TipoContoStorico,
    TipoPagamentoStorico:data.TipoPagamentoStorico,
    TipoRagioneSociale:data.TipoRagioneSociale,
    TitoloAcc:data.TitoloAcc

}
}
    return (
    <DashboardLayout>
    <DashboardNavbar />
    <Card  >
    {!loading && 
        <MDBox mt={3} mb={3}>

          <Grid container spacing={1}>


            {/*COLONNA SINISTRA - CAMBIANO LE INFO A SECONDA DELLA NAV*/}
            <Grid item xs={12} md={6} xl={8} >
                <MDBox p={2} >
                  {profiloCliente.user.map((row) => {
                return (
                    <MDBox key={row.id} >
                  
                    <MDBox 
                    display="flex" 
                    alignItems="center"
                    justifyContent="space-between">
                    <MDBox display="block" >
                    <MDBadge badgeContent="Lista iorio" container />
                    <MDTypography variant="h5"  fontWeight="bold" >
                    Cliente: {row.Denominazione} - {row.ClienteID}
                    </MDTypography>
                    </MDBox>
                    <MDBox display="block" >
                    </MDBox>
                    </MDBox>



                    {tabValue < 1 && 

                    <MDBox>
                      <ClientiInfo Cliente={profiloCliente} setTab={setTab}></ClientiInfo>
                    </MDBox>

                    }


                    {tabValue === 1 && 

                    <MDBox>
                        <MDTypography mt={1}
                          mb={1.5}
                          variant="button" fontWight="bold"
                          display="block"
                          lineHeight={1.50}
                          fontWeight="regular">
                          Chiamate : 
                        </MDTypography>
                    </MDBox>

                    }

                    {tabValue === 2 && 

                    <MDBox>
                    </MDBox>

                    }
          

                                
                    </MDBox>
                    );
                  })}
                </MDBox>
            </Grid>


             {/*COLONNA DESTRA- NAVAIGAZIONE - DA INSEERIRE WIDGET LATERALI*/}
            <Grid item xs={12} xl={4}>
            <MDBox p={2} >
            <AppBar position="static">
              <Tabs  value={tabValue} onChange={setTab} >
                <Tab
                  label="Info"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                    info
                    </Icon>
                  }
                />
                <Tab
                  label="Chiamate"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      call
                    </Icon>
                  }
                />
                <Tab
                  label="Modifica"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      edit
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
        </MDBox>
            </Grid>


          </Grid>

        </MDBox>
      }
    </Card>
    <Footer />
  </DashboardLayout>
    )
}
ClientePage.propTypes = {
  
    infoCliente: PropTypes.object
  };


export default ClientePage