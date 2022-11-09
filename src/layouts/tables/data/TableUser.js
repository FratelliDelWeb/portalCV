import React, { useState, useEffect } from "react";
import DataTable from "examples/Tables/DataTable";

export default function TableUser() {
  const [posts, setPosts] = useState([
  ]);
const [limite, setLimite] = useState(10)
   const baseDatiUser = [];
  const handleSetLimit = (childData) =>{
    this.props.setEntriesPerPage(childData);
    this.setLimite(childData);
}

  const searchClients = (limit = limite, page = 1, query = {
    Telefono1: {
        value: "",
        operation: "is not empty"
    },
    Telefono2: {
        value: "",
        operation: "is not empty"
    }}) => {
    
    fetch("api/search/clients",{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
       query,
       limit: limit,
       page: page,
      }),})
      .then((response) => response.json())
      .then((x) => {
        setPosts(x.data);
        console.log(x.data);
        console.log(posts);
      })
      .catch((err) => err);
  }
  useEffect(() => {
    searchClients()
  }, []);
  const variabile = posts;
  console.log(posts[0]);
  console.log(variabile);
  console.log(variabile.lengh);
  console.log(DataTable)
  if (posts.length > 0) {
    for (let x = 0; x < posts.length; x += 1) {
      if (posts[x].Telefono1 !== "") {
        baseDatiUser[x] = {
          codiceCliente: posts[x].CodiceCliente,
          name: posts[x].Denominazione,
          position: posts[x].Indirizzo + posts[x].Località,
          telefono: posts[x].Telefono1,
          Email: posts[x].Email,
          Note: posts[x].Note,
        };
      }
    }
  }
  return (
    <DataTable
      table={{
        columns: [
          { Header: "CC", accessor: "codiceCliente", width: "10%" },
          { Header: "Nome", accessor: "name", width: "13%" },
          { Header: "Indirizzo", accessor: "position", width: "30%" },
          { Header: "Telefono", accessor: "telefono", width: "30%" },
          { Header: "Email", accessor: "Email", width: "30%" },
          { Header: "NOTE", accessor: "Note", width: "30%" },
        ],
        rows: baseDatiUser,
      }}
    
      canSearch="true"
    />
  );
}
