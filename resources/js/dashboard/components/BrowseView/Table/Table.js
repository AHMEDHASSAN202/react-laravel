import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

import { getInitials } from './../../../helpers';
import { AppContext } from '../../../AppContext';
import { ALL_CHECKED } from '../../../actions';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

export default props => {
  const { className, data, handleClickRow = null, ...rest } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const {dispatch} = useContext(AppContext);

  useEffect(() => {
    dispatch({
      TYPE: ALL_CHECKED,
      payload: selected
    })
  }, [selected])

  //handle select all checkbox
  const handleSelectAll = event => {
    let selectedData = []
    const { data } = props;

    if (event.target.checked) {
      selectedData = data.map(d => d.id);
    } else {
      selectedData = [];
    }
    
    setSelected(selectedData);
  };

  //handle select one checkbox
  const handleSelectOne = (event, id) => {
    let newSelected = [];
    
    if (selected.indexOf(id) === -1) {
      newSelected = [...selected, id];
    } else {
      newSelected = selected.filter((i) => i != id);
    }

    setSelected(newSelected);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.length === data.length}
                      color="primary"
                      indeterminate={
                        selected.length > 0 &&
                        selected.length < data.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Registration date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(0, rowsPerPage).map(d => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={d.id}
                    selected={selected.indexOf(d.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.indexOf(d.id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, d.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell onClick={() => handleClickRow != null ? handleClickRow(d) : false}>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={d.avatarUrl}
                        >
                          {getInitials(d.name)}
                        </Avatar>
                        <Typography variant="body1">{d.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{d.email}</TableCell>
                    <TableCell>
                      {d.address.city}, {d.address.state},{' '}
                      {d.address.country}
                    </TableCell>
                    <TableCell>{d.phone}</TableCell>
                    <TableCell>
                      {moment(d.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={data.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};