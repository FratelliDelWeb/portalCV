import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Autocomplete from "@mui/material/Autocomplete";

import DataTableHeadCell from "examples/Tables/DataTable/DataTableHeadCell";
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

export default function TableClienti() {

    const options = ['5','25','50','100'];

    let baseDatiUser = [];

    const [search, setSearch] = useState({
        query: {
           
        },
        page: 1,
        limit: 50
    })

    const [state, setState] = useState({
        rows: [],
        page: 1,
        headers: [
          { Header: "id", accessor: "codiceCliente", width: "10%" },
          { Header: "Nome", accessor: "name", width: "13%" },
          { Header: "Cellulare", accessor: "position", width: "30%" },
          { Header: "Telefono", accessor: "telefono", width: "30%" },
          { Header: "Email", accessor: "Email", width: "30%" },
          { Header: "NOTE", accessor: "Note", width: "30%" },
        ],
        limit : 50,
    });

    const setBaseDati = (data) => {
        if (data.length > 0) {
            for (let x = 0; x < data.length; x += 1) {
              if (data[x].Telefono1 !== "") {
                baseDatiUser[x] = {
                  codiceCliente: data[x]._id,
                  name: data[x].name,
                  phone: data[x].phone,
                  telefono: data[x].telephone,
                  Email: data[x].email,
                  Note: data[x].Note,
                };
              }
            }
          }
    }

    const fetchClients = async (search) => {

    let limit = search.limit;
    let page = search.page;
    let query = search.query;

    fetch("api/search/candidates",{
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
            setBaseDati(x.data);
            setState(() => ({
                ...state,
                rows: baseDatiUser
            }));
        })
        .catch((err) => err);
    }

      // Set the entries per page value based on the select value
    const setEntriesPerPage = (value) => {
        setSearch(() => ({
            ...search,
            limit: value
        }))
    }

        // A function that sets the sorted value for the table
    const setSortedValue = (column) => {
        let sortedValue;

        if (isSorted && column.isSorted) {
        sortedValue = column.isSortedDesc ? "desc" : "asce";
        } else if (isSorted) {
        sortedValue = "none";
        } else {
        sortedValue = false;
        }

        return sortedValue;
    };

    useEffect(() => {
        fetchClients(search)
    }, [search])

    useEffect(() => {
        fetchClients();
    }, []);

    return (
        <TableContainer>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <MDBox display="flex" alignItems="center">
                <Autocomplete
                disableClearable
                options={options}
                onChange={(event, newValue) => {
                  setEntriesPerPage(parseInt(newValue, 10));
                }}
                value={search.limit.toString()}
                size="small"
                sx={{ width: "5rem" }}
                renderInput={(params) => <MDInput {...params} />}
              />
              <MDTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </MDTypography>
            </MDBox>
            </MDBox>

            <Table>
                <TableRow>
                {state.headers.map((headerCell) => (
                    <DataTableHeadCell key={headerCell.id}
                    >
                    {headerCell.Header}
                    </DataTableHeadCell>
                ))}
                </TableRow>
            <TableBody>
            {state.rows.map((row) => {
                return (
                <TableRow key={row.id}>
                    {Object.keys(row).map((keyName, i) => (
                    <DataTableBodyCell key = {keyName}
                    >
                        {row[keyName]}
                    </DataTableBodyCell>
                    ))}
                </TableRow>
                );
            })}
            </TableBody>
            </Table>







{/*         <MDBox
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
        >
        {showTotalEntries && (
          <MDBox mb={{ xs: 3, sm: 0 }}>
            <MDTypography variant="button" color="secondary" fontWeight="regular">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </MDTypography>
          </MDBox>
        )}
        {pageOptions.length > 1 && (
          <MDPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <MDPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </MDPagination>
            )}
            {renderPagination.length > 6 ? (
              <MDBox width="5rem" mx={1}>
                <MDInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(handleInputPagination, handleInputPaginationValue)}
                />
              </MDBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <MDPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </MDPagination>
            )}
          </MDPagination>
        )}
      </MDBox> */}
        </TableContainer>
    )
}