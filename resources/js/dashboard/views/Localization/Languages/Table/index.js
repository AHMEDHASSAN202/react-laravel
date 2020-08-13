import React from 'react';
import TableComponent from '../../../../components/TableComponent';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { getDirectionLabel } from '../../../../helpers/functions';

export default props => {
  const {data, handleClickEdit = null, handleClickDelate = null, handlePageChange = null, handleRowsPerPageChange = null, ...rest} = props;
    const labels = [
        {title: 'Name', name: 'language_name'},
        {title: 'Code', name: 'language_code'},
        {title: 'Direction', name: 'language_direction', call: (d) => getDirectionLabel(d.language_direction)},
        {title: 'Display Front', name: 'language_display_front'},
    ];
  return (
      <TableComponent 
        data={data}
        labels={labels}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        hasCheckbox={false}
      >
        {d => {
            return (
                <>
                    <IconButton aria-label="EDIT" onClick={ (e) => handleClickEdit(e, d)}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="DELETE" onClick={ (e) => handleClickDelate(e, d)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </>
            )
        }}
      </TableComponent>
  );
};
