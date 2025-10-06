import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Button,
} from '@mui/material';
import React from 'react';

// Do not change the way the components and variables are exported and imported

export default function CryptoTable({
  data,
  page,
  handleBuy,
  handleOpen,
  handlePageChange,
}) {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 300 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.results.map(row => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{color: row.price < 100 ? 'green' : 'inherit'}}>
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleBuy(row)}
                    >
                      Buy
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      style={{ marginLeft: '20px' }}
                      onClick={() => handleOpen(row)}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              {data && (
                <TablePagination
                  colSpan={3}
                  count={data.count}
                  rowsPerPage={4}
                  rowsPerPageOptions={[4]}
                  page={page}
                  onPageChange={handlePageChange}
                />
              )}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
