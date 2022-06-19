import React from "react";
import Invoices from "../../Data/invoices.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Badge from "../../components/Badge";

const tableStyles = {
  fontWeight: 600,
  fontSize: 15,
  fontFamily: "Poppins",
  letterSpacing: 1,
  backgroundColor: "rgba(221,228,255,0.9)",
};
const Small = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "1rem", borderCollapse: "collapse" }}
    >
      <Table sx={{ minWidth: 320 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={tableStyles} align="left">
              Invoice No.
            </TableCell>

            <TableCell sx={tableStyles} align="right">
              Amount
            </TableCell>
            <TableCell sx={tableStyles} align="center">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Invoices.map((invoice) => (
            <TableRow
              key={invoice.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ fontWeight: 600, fontFamily: "Poppins" }}
                align="left"
              >
                {invoice.invoiceNumber}
              </TableCell>

              <TableCell
                sx={{ fontWeight: 600, fontSize: 15, fontFamily: "Poppins" }}
                align="right"
              >{`$ ${invoice.InvoiceAmount}`}</TableCell>
              <TableCell sx={{ fontFamily: "Poppins" }} align="center">
                {parseInt(invoice.DaysLate, 10) ? (
                  <Badge content="Late" late />
                ) : (
                  <Badge content="On Time" paid />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Small;
