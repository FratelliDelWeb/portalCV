import React, { useState, useEffect } from "react";
import axios from 'axios';
import { modifyClient } from "service/clients.service";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";
import  MDInput  from 'components/MDInput';
const ClientiInfoEdit = ({Cliente,setTab ,setCliente }) => {
    

 const [ClienteEdit, setClienteEdit] = useState({
    CAP2:"",
    CAP:"",
    Categoria: "Caricamento iniziale",
    ClienteID: 1001,
    CodiceAgenzia: 1,
    CodiceCliente:  10000101,
    CodiceCollab: "",
    CodiceFiscale : "",
    Contattabile: 1,
    ContattoID: "",
    DataAggiornamentoSaldo: "",
    DataNascita: "",
    DataRichiamo: "",
    Email: "",
    Fax:"",
    IBAN:"",
    ImportoRata: "",
    ImportoRataStorica:0,
    ImportoSaldoAttualizzato: 0,
    ImportoSaldoContabile:0,
    ImportoSaldoStorico:0,
    Indirizzo: "VIA GALILEO GALILEI,2",
    Indirizzo2: "",
    Località: "PONTE SAN PIETRO",
    Località2: "",
    Note: "",
    Operatore: "",
    PartitaIVA:"2574530164",
    Provincia:"BG",
    Provincia2: "",
    Sesso:"N",
    Telefono1:"035 4376758",
    Telefono2 :"",
    TipoCliente :"S",
    TipoContoStorico :"C",
    TipoPagamentoStorico: "C",
    TipoRagioneSociale:"Non specif",
    TitoloAcc: "Gent.",
    id: "6352d9b9337915282d9786cb",
    nomeCliente:"2ERRE SRL",
  });


console.log(ClienteEdit)





const editCliente = async (eitData) => {
  modifyClient(eitData)
}

const setEditData = (Cliente ,ClienteEdit ) => {

 let  eitData= {
    "id": Cliente.user[0].id,
    "field" : [
      {
      "name" : "Email",
      "from" : Cliente.user[0].Email,
      "to" : ClienteEdit.Email,
    },
    {
    "name" : "Telefono1",
    "from" : Cliente.user[0].Telefono1,
    "to" : ClienteEdit.Telefono1,
  },{
    "name" : "Indirizzo",
    "from" : Cliente.user[0].Indirizzo,
    "to" : ClienteEdit.Indirizzo,
  },
  {
    "name" : " CAP",
    "from" : Cliente.user[0].CAP,
    "to" : ClienteEdit. CAP,
  },
  {
    "name" : " Provincia",
    "from" : Cliente.user[0].Provincia,
    "to" : ClienteEdit.Provincia,
  },
  {
    "name" : " Località",
    "from" : Cliente.user[0].Località,
    "to" : ClienteEdit.Località,
  },



  

 
 ]
  };
  console.log(eitData);
  editCliente(eitData);
  setCliente();
  setTab(null,0)
  
}


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
  <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                                <MDInput type="text" label="nomeCliente"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, nomeCliente: val });}} defaultValue={row.nomeCliente} />  
                                 </MDBox>

                                <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                                <MDInput type="email" label="Email"  onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Email: val });}} defaultValue={row.Email} />  
                                 </MDBox>
                               
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="tel" label="Telefono"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Telefono1: val });}}  defaultValue={row.Telefono1} />
                                 </MDBox>

                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Località"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Località: val });}}  defaultValue={row.Località} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Provincia"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Provincia: val });}}  defaultValue={row.Provincia} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Indirizzo"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Indirizzo: val });}}  defaultValue={row.Indirizzo} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="CAP"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    CAP: val });}}  defaultValue={row.CAP} />
                                 </MDBox>
                              

  </Grid>
  <Grid item xs={6} md={6} xl={6} >


    </Grid>


    <Grid item xs={12} display="flex" alignItems="flex-end" md={12} xl={12} >

      
<MDButton color="light"  onClick={() => seachCliente(searchData)}   p={1} >
<Icon>trash</Icon>&nbsp;  Elimina Cliente
</MDButton>
<MDButton color="error"  onClick={() => setEditData(Cliente,ClienteEdit)}  p={1}>
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
    setTab: PropTypes.func,
    setCliente: PropTypes.func
  };


export default ClientiInfoEdit