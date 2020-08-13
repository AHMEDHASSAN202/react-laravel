import React from 'react';
import TableComponent from './../../../components/TableComponent';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';

export default props => {
  const {data, handleClickEdit = null, handlePageChange = null, handleRowsPerPageChange = null, ...rest} = props;
    const labels = [
        {title: 'Name', name: 'name'},
        {title: 'Email', name: 'email'},
        {title: 'Location', name: 'address', call: (d) => `${d.address.city}, ${d.address.state}, ${d.address.country}`},
        {title: 'Phone', name: 'phone'},
        {title: 'Registration date', name: 'createdAt', call: (d) => moment(d.createdAt).format('DD/MM/YYYY')},
    ];
  return (
      <TableComponent 
        data={data}
        labels={labels}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      >
        {d => {
            return (
                <>
                    <IconButton aria-label="EDIT" onClick={ (e) => handleClickEdit(e, d)}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                </>
            )
        }}
      </TableComponent>
  );
};
