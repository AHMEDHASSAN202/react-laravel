import React from 'react';
import {
  TablePagination,
} from '@material-ui/core';


export default props => {

  const {handlePageChange, handleRowsPerPageChange, perpage, count} = props;

  const [rowsPerPage, setRowsPerPage] = React.useState(perpage);
  const [page, setPage] = React.useState(0);


  const handleChange = (event, page) => {
    setPage(page);
    handlePageChange(event, page);
  };

  const handleRowsPerChange = event => {
    setRowsPerPage(event.target.value);
    handleRowsPerPageChange(rowsPerPage)
  };


  return (
    <TablePagination
        component="div"
        count={count}
        onChangePage={handleChange}
        onChangeRowsPerPage={handleRowsPerChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, 50]}
    />
  );
};
