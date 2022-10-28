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

function Overview() {
  const [users, setUser] = useState([]);
  const [usersx, setUsers] = useState([]);
  const baseDatiUser = [];
  const baseDatiUsers = [];
  useEffect(() => {
    fetch("api/users")
      .then((response) => response.json())
      .then((x) => {
        setUser(x);
        setUsers(x);
        console.log(users);
      })
      .catch((err) => err);
  }, []);
  const variabile = users;
  console.log(users[0]);
  console.log(variabile);
  console.log(variabile.lengh);

  if (users.length > 0) {
    for (let x = 0; x < users.length; x += 1) {
      baseDatiUser[x] = {
        username: users[x].username,
        professione: users[x].professione,
        // eslint-disable-next-line no-underscore-dangle
        email: users[x].email,
        // eslint-disable-next-line no-underscore-dangle
        role: users[x].role,
      };
    }
    console.log(baseDatiUser);
  }
  if (usersx.length > 0) {
    for (let x = 0; x < usersx.length; x += 1) {
      baseDatiUsers[x] = {
        image: usersx[x].email,
        name: usersx[x].username,
        description: usersx[x].professione,
        action: {
          type: "internal",
          route: `/profile/${usersx[x]._id}`,
          color: "info",
          label: " APRI",
        },
      };
    }
    console.log(baseDatiUsers);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid> */}
            <Grid item xs={12} md={6} xl={8} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />

              {baseDatiUser.map((item) => (
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <MDBox p={2} key={item._id}>
                  <MDTypography variant="h4" display="block" fontWeight="bold" lineHeight={2.3}>
                    Informazioni Account
                  </MDTypography>
                  <MDTypography
                    variant="h6"
                    display="block"
                    lineHeight={1.25}
                    fontWeight="medium"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                  >
                    {item.username}
                  </MDTypography>
                  <MDTypography display="block" lineHeight={1.25} fontWeight="regular" variant="h6">
                    {item.professione}
                  </MDTypography>
                  <MDTypography display="block" lineHeight={1.25} fontWeight="regular" variant="h6">
                    {item.email}
                  </MDTypography>
                </MDBox>
              ))}
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={baseDatiUsers} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
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
  );
}

export default Overview;
