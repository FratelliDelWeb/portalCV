import Grid from "@mui/material/Grid";
import EmptyLayout from "../components/EmptyLayout";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

function Home() {
  return (
    <EmptyLayout>
      <MDBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} height="100%">
          <Grid item xs={11} sm={9} md={5} lg={6} xl={6}>
            <MDBox mt={10} p={4} shadow="xl" borderRadius="xl">
              FORM
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </EmptyLayout>
  );
}

export default Home;
