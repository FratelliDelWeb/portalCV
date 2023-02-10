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
import Card from "@mui/material/Card";
import MDBadge from "components/MDBadge";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import MDButton from '../../../../components/MDButton/index';
function BillingInformation({UserListToCall}) {

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Candidature ricevute
        </MDTypography>
      </MDBox>
    <MDBox pt={1} pb={2} px={2}>
    <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
      {UserListToCall.map((row) => (
          <MDBox component="li"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          bgColor={"grey-100"}
          borderRadius="lg"
          p={3}
          mb={1}
          mt={2}
          key={row._id}>

            
            <MDBox width="100%" display="flex" flexDirection="column">
{/*             <MDBadge badgeContent="NUOVO" container />
 */}              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexDirection={{ xs: "column", sm: "row" }}
                mb={2}
              >


                <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                {row.name}   {row.surname}
                </MDTypography>
            

              <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
                  <MDBox mr={1}>
                    <MDButton variant="text" color="error">
                      <Icon>delete</Icon>&nbsp;Elimina
                    </MDButton>
                  </MDBox>
                  <MDButton  component="a"
                  href={`clients/${row._id}`}
                  rel="noreferrer"
                  infoCliente={row}
                  variant="text" color={"dark"}>
                    <Icon>edit</Icon>&nbsp;APRI
                  </MDButton>
                </MDBox>


            </MDBox>

             <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexDirection={{ xs: "column", sm: "row" }}
                mb={2}
              >
             <MDBox display="block" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>

              <MDBox mb={1} lineHeight={0}>
                <MDTypography variant="caption" color="text">
                  Cellulare:&nbsp;&nbsp;&nbsp;
                  <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {row.phone}
                  </MDTypography>
                </MDTypography>
              </MDBox>
              <MDBox mb={1} lineHeight={0}>
                <MDTypography variant="caption" color="text">
                  Telefono:&nbsp;&nbsp;&nbsp;
                  <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {row.telephone}
                  </MDTypography>
                </MDTypography>
              </MDBox>

              <MDBox mb={1} lineHeight={0}>
                <MDTypography variant="caption" color="text">
                  Email:&nbsp;&nbsp;&nbsp;
                  <MDTypography variant="caption" fontWeight="medium">
                  {row.email}
                  </MDTypography>
                </MDTypography>
              </MDBox>

             
              </MDBox>

              <MDBox display="block" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
             
              
              </MDBox>


              </MDBox>

            </MDBox>
           </MDBox>
      ))} 
    </MDBox>
    </MDBox>
  </Card>
  );
}
BillingInformation.propTypes = {
  UserListToCall: PropTypes.arrayOf(PropTypes.object)


};
export default BillingInformation;
