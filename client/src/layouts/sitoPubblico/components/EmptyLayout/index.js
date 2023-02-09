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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import ResponsiveAppBar from "../NavbarSito/"
// Material Dashboard 2 React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayoutSito from "examples/LayoutContainers/PageLayoutSito";

// Authentication pages components
import FooterPubblico from "../FooterPublico";


function EmptyLayout( {children}) {
  return (
    <PageLayoutSito>
    
      <MDBox  >  <ResponsiveAppBar>

</ResponsiveAppBar>
<MDBox>
      {children}
      </MDBox>
      <FooterPubblico dark />
      </MDBox>
     
    </PageLayoutSito>
  );
}

// Typechecking props for the BasicLayout
EmptyLayout.propTypes = {
  children: PropTypes.node,
};

export default EmptyLayout;
