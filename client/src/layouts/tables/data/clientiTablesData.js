import React, { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function TableData() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("api/clienti")
      .then((response) => response.json())
      .then((x) => {
        setPosts(x);
      })
      .catch((err) => err);
  }, []);
  const variabile = posts;
  console.log(posts);
  console.log(variabile);
  console.log(variabile.lengh);
  return (
    <>
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            user
          </MDTypography>
        </MDBox>
      </MDBox>

      {posts.map((item) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
          <MDBox ml={2} lineHeight={1} key={item.CodiceCliente}>
            <MDTypography display="block" variant="button" fontWeight="medium">
              {item.Denominazione}
            </MDTypography>
            <MDTypography variant="caption">{item.CAP}</MDTypography>
          </MDBox>
        </MDBox>

        /*  <MDBox display="flex" alignItems="center" lineHeight={1}>
            <tr key={item.CodiceCliente}>
              <td>{item.Denominazione}</td>
              <td>{item.CAP}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          </MDBox> */
      ))}
    </>
  );
}
