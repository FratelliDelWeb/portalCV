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
import SelectProvincia from  'components/FormComponent/SelectProvincia';
const ClientiInfoEdit = ({Cliente,setTab ,setCliente }) => {
    

  console.log(Cliente)

 const [ClienteEdit, setClienteEdit] = useState({
  id:Cliente.user[0].id,
  Nome:Cliente.user[0].name,
  Cognome:Cliente.user[0].cognome,
  Email: Cliente.user[0].email,
  Cellulare: Cliente.user[0].cellulare,
  Telefono: Cliente.user[0].telefono,
  DataCandidatura : Cliente.user[0].created_at,
  Status : Cliente.user[0].status

  });

console.log(ClienteEdit)





const editCliente = async (eitData) => {
 modifyClient(eitData).then(setCliente(eitData))
  
}

const setEditData = (Cliente ,ClienteEdit ) => {

 let  eitData= {
    "id": Cliente.user[0].id,
    "fields" : [
      {
        "name" : "name",
        "from" : Cliente.user[0].name,
        "to" : ClienteEdit.Nome,
      },
      {
      "name" : "surname",
      "from" : Cliente.user[0].cognome,
      "to" : ClienteEdit.Cognome,
    },
    {
      "name" : "email",
      "from" : Cliente.user[0].email,
      "to" : ClienteEdit.Email,
    },
    {
    "name" : "phone",
    "from" : Cliente.user[0].cellulare,
    "to" : ClienteEdit.Cellulare,
  },
  {
    "name" : "telephone",
    "from" : Cliente.user[0].telefono,
    "to" : ClienteEdit.Telefono,
  },
  {
    "name" : "status",
    "from" : Cliente.user[0].status,
    "to" : "Wievd",
  }
  



 ]
  };
  console.log(eitData);
  editCliente(eitData);
/*  setCliente();
 */  setTab(null,0)
  
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
            Modifica le informazioni del Candidato
        </MDTypography>
       
        <Grid item xs={12} md={12} xl={12} >
                          
                                <MDInput size="large"     variant="standard"   display="flex"  type="text" label="Nome"    onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Nome: val });}} defaultValue={row.name} />  
                             
                                <MDInput type="text" variant="standard"   size="large"  display="flex"  label="Cognome"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Cognome: val });}} defaultValue={row.cognome} />  
                              
                                <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                                <MDInput type="email" label="Email"     variant="standard" onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Email: val });}} defaultValue={row.email} />  
                                 </MDBox>
                               
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="tel" label="Telefono"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Telefono: val });}}  defaultValue={row.telefono} />
                                 </MDBox>

                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Cellulare"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Cellulare: val });}}  defaultValue={row.cellulare} />
                                 </MDBox>
                              {/*    <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>    
                                 <SelectProvincia></SelectProvincia>    
                                 <MDInput type="text" label="Provincia"   onChange={(eventgit ì) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Provincia: val });}}  defaultValue={row.Provincia} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Indirizzo"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Indirizzo: val });}}  defaultValue={row.Indirizzo} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="CAP"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    CAP: val });}}  defaultValue={row.CAP} />
                                 </MDBox>
                              
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Codice Fiscale"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    CodiceFiscale: val });}}  defaultValue={row.CodiceFiscale} />
                                 </MDBox>

            
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="date" label="Data di Nascita"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    DataNascita: val });}}  defaultValue={row.DataNascita} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="date" label="DataRichiamo"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    DataRichiamo: val });}}  defaultValue={row.DataRichiamo} />
                                 </MDBox>      
 */}
                           

  </Grid>
    <Grid item xs={12} md={12} xl={12} >
   
                        {/*   <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                                <MDInput type="number" label="ImportoRataStorica"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, ImportoRataStorica: val });}} defaultValue={row.ImportoRataStorica} />  
                                 </MDBox>

                                <MDBox mb={1} display="flex"  alignItems="center"lineHeight={0}>        
                                <MDInput type="number" label="ImportoSaldoAttualizzato"  onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, ImportoSaldoAttualizzato: val });}} defaultValue={row.ImportoSaldoAttualizzato} />  
                                 </MDBox>
                               
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="number" label="ImportoSaldoContabile"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, ImportoSaldoContabile: val });}}  defaultValue={row.ImportoSaldoContabile} />
                                 </MDBox>

                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="number" label="ImportoSaldoStorico"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, ImportoSaldoStorico: val });}}  defaultValue={row.ImportoSaldoStorico} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Note"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Note: val });}}  defaultValue={row.Note} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Operatore"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit, Operatore: val });}}  defaultValue={row.Operatore} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="nuber" label="Partita IVA"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    PartitaIVA: val });}}  defaultValue={row.PartitaIVA} />
                                 </MDBox>
                              
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="Sesso"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    Sesso: val });}}  defaultValue={row.Sesso} />
                                 </MDBox>

            
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="TipoPagamentoStorico"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    TipoPagamentoStorico: val });}}  defaultValue={row.TipoPagamentoStorico} />
                                 </MDBox>
                                 <MDBox mb={1} display="block"  alignItems="center"lineHeight={0}>        
                                 <MDInput type="text" label="TitoloAcc"   onChange={(event) => { const val = event.target.value; setClienteEdit({ ...ClienteEdit,    TitoloAcc: val });}}  defaultValue={row.TitoloAcc} />
                                 </MDBox> */}
    </Grid>


    <Grid item xs={12}  md={12} xl={12} >

    <MDBox  display="flex"  alignItems="flex-start" justifyContent="flex-start" >
      <MDBox  mr={1} >
      <MDButton    color="light"  onClick={() => seachCliente(searchData)}  >
      <Icon>trash</Icon>&nbsp;  Elimina Cliente
      </MDButton>
      </MDBox>
      <MDBox>
      <MDButton color="error"  onClick={() => setEditData(Cliente,ClienteEdit)}  >
      <Icon>save</Icon>&nbsp;  Salva Modifiche
      </MDButton>
      </MDBox>

      </MDBox>

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