/* eslint-disable no-underscore-dangle */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Loader from 'components/Loader';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/profile/components/Header";

// Data

// Images

import React, { useState, useEffect } from "react";
import { getUsersInfo , getUsersList } from "service/users.service";
import { useParams } from 'react-router-dom';


const  Overview = () =>  {
// DETTAGLI PROFLIO
  const [UserProfilo,setUserProfilo] =  useState({user:[]});
  const DatiUser = []
  const [loading,setLoading] = useState(true);


  //set ID UTENTE 
  const [QueryUserId,setQueryUserId ] = useState("inzio")

 // LISTA UTENTI 
  const [UsersList,setUsersList] = useState([]);
  const UsersListNew =[] ;
  const tokenDaMandare = " ";
/*   const idPath =  window.location.pathname;
  const idToken = localStorage.getItem("token")
  const idQuery = idPath.substring(10);
  console.log(idToken);
  console.log(idQuery); */

  



  useEffect(() => {
    setIdUser() 
    getUsersListFull();
  },[QueryUserId])

  const getUser = async (UserProfilo) => {
    const data = await  getUsersInfo(QueryUserId);
    setUserDati(data);
    setUserProfilo(() => ({
      ...UserProfilo,
      user: DatiUser
    }));
    setLoading(false);
    console.log(DatiUser)
}


 const setIdUser =() => {
  const idTokenQuery = window.location.pathname.substring(9);
  const idTokenx = localStorage.getItem("token");
  if(idTokenQuery !== ""){
    setQueryUserId(idTokenQuery);

  }else{
    setQueryUserId(idTokenx);
  }
  console.log(QueryUserId)
  getUser();  
 }
  const updateNumberHandler = (data) => {
    console.log(data);
    console.log("richiamaFunzione" + data);
    setQueryUserId("tokenFINALEZIALE");


    console.log(QueryUserId)

  
  }

  const setUserDati = (data) => {
            DatiUser[0]= {
              id: data._id,
              name: data.username,
              Email: data.email,
              professione : data.professione,
            };
  }

 
  




  const setUserListNew = (data) => {
    debugger;
    if (data.length > 0) {
      for (let x = 0; x < data.length; x += 1) {
        UsersListNew[x] = {
          id: data[x]._id,
          image: data[x].email,
          name: data[x].username,
          description: data[x].professione,
          action: {
            type: "internal",
            route: `/profile/${data[x]._id}`,
            color: "info",
            label: " APRI",
          },
        };
      }
  } 
}

  
  const getUsersListFull = async () => {
    const data =  await  getUsersList();
    setUserListNew(data)
    setUsersList(UsersListNew)

  }
 

  
 /*  useEffect(() => {
    fetch(`api/users/${window.localStorage.getItem("token")}`)
      .then((response) => response.json())
      .then((x) => {
        setUser(x);

        console.log("persu2", users);
      })
      .catch((err) => err);
  }, []);
  if (users.length > 0) {
    for (let x = 0; x < users.length; x += 1) {
      baseDatiUser[x] = {
        username: users[x].name,

        // eslint-disable-next-line no-underscore-dangle
        email: users[x].email,
        // eslint-disable-next-line no-underscore-dangle
        role: users[x].description,
      };
    }
    console.log(baseDatiUser);
  } */
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
    
      <Header  >
      {loading && <Loader />}
      
      {!loading &&
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={8} >
             

               
                <MDBox p={2} >
           
                <MDTypography variant="h4" display="block" fontWeight="bold" lineHeight={2.3}>
                    Informazioni Account
                  </MDTypography>

                  {UserProfilo.user.map((row) => {
   return (
    <MDBox key={row.id}>
       <MDTypography
                    variant="h6"
                    display="block"
                    lineHeight={1.50}
                    fontWeight="medium"
                  >
                    {row.name}
                  </MDTypography>
                  <MDTypography display="block" lineHeight={1.50} fontWeight="regular" variant="h6">
                  {row.Email}
                  </MDTypography>
                  <MDTypography display="block" lineHeight={1.50} fontWeight="regular" variant="h6">
                  {row.professione}
                  </MDTypography>
    </MDBox>
    );
 })}
               
                </MDBox>
             
            </Grid>


            
            <Grid item xs={12} xl={4}>

  <ProfilesList title="conversations" userToken ={"6356abbdea9d02347953fa0a"}  onUpdateToken={updateNumberHandler} profiles={UsersList} shadow={false} />
            
   </Grid>
          </Grid>
        </MDBox>

      }


        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6} />
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  )
}

export default Overview