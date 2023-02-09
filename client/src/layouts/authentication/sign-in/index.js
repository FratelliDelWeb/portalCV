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

import { Component } from "react";

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";


// Material Dashboard 2 React componentsf
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/BG-LOGIN-MIRABILIA.jpg";

export default class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usename: "",
      password: "",
      stato: false,
    };
    this.handeledSubmit = this.handeledSubmit.bind(this);
  }

  // Simple POST request with a JSON body using fetch
  /*    [posts4, setState4] = useState([]);
   [postsbasic, setBasic] = useState([]); */

  /*  linkToLogin = "/#";
   staus = 0; */

  handeledSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
    fetch("/api/auth/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.message === "User successfully Logged in") {
          alert("login successful");
          window.localStorage.setItem("token", data.user);
        }
        if (data.role !== "admin") {
          fetch("/basic").then((response) => {
            response.json();
            const staus = response.status;
            console.log(response);
            console.log(staus);
            if (staus === 200 || staus === 201) {
              window.location.href = "/dashboard";
            } else {
              alert("Nome o password errati");
            }
          });
        } else {
          fetch("/admin").then((response) => {
            response.json();
            const staus = response.status;
            console.log(response);
            console.log(staus);
            if (staus === 200 || staus === 201) {
              window.location.href = "/dashboard";
            } else {
              alert("Nome o password errati");
            }
          });
        }
      });
  }

  render() {
    return (
      <BasicLayout image={bgImage}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
             <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              MyPortal - Mirabilia
            </MDTypography>
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              ACCEDI
            </MDTypography>
          {/*   <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={2} />
              <Grid item xs={2} />
              <Grid item xs={2} />
            </Grid> */}
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="Email"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  fullWidth
                />
              </MDBox>
              <MDBox display="flex" alignItems="center" ml={-1}>
                {/* <Switch checked={rememberMe} onChange={handleSetRememberMe} /> */}
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;Ricordati di me
                </MDTypography>
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth onClick={this.handeledSubmit}>
                  Accedi
                </MDButton>

                <MDBox>
                  <MDTypography> </MDTypography>
                </MDBox>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                Buon Lavoro!
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </BasicLayout>
    );
  }
}
