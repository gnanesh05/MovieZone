import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette:{
    mode:'dark',
  },
})

export default function CustomPagination({setPage, totalPages=10}) {
 const handlePageChange = (e, page)=>{
  setPage(page);
  window.scrollTo(0,0);
 }
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack spacing={2}>
        <Pagination count={totalPages} color="primary" onChange={handlePageChange} />
      </Stack>
    </ThemeProvider>
  );
}