import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { getDirectionLabel } from '../../../../helpers/functions';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  cursor: {
      cursor: 'pointer'
  }
}));

export default props => {
  const {data, handleClickEdit = null, handleClickDelate = null, ...rest} = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={classes.root}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>Direction</TableCell>
                  <TableCell>Display Front</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(d => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={d.language_id}
                  >
                    <TableCell className={classes.cursor}>
                      <div className={classes.nameContainer}>
                        {d.language_name}
                      </div>
                    </TableCell>
                    <TableCell>{d.language_code}</TableCell>
                    <TableCell>{getDirectionLabel(d.language_direction)}</TableCell>
                    <TableCell>{Number(d.language_display_front)}</TableCell>
                    <TableCell>
                        <IconButton aria-label="EDIT" onClick={ (e) => handleClickEdit(e, d)}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="DELETE" onClick={ (e) => handleClickDelate(e, d)}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};
