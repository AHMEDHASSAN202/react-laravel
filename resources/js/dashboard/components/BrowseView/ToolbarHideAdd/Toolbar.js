import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

import { SearchInput } from '../..';
import { AppContext } from '../../../AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  row: {
    height: '42px',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  buttonsBox: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  btn: {
    margin: 5
  },
  removeBtn: {
    backgroundColor: theme.palette.error.main,
    color: '#fff',
    "&:hover": {
        backgroundColor: theme.palette.error.dark
    }
  }
}));

export default props => {

  const {data} = React.useContext(AppContext);

  const { className, handleDeleteClick = null, handleChangeInputSearch = null, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
     <Grid container>
     <Grid item sm={6} xs={12}>
        <div className={classes.row}>
          <SearchInput
            onChange={handleChangeInputSearch}
            className={classes.searchInput}
            placeholder="Search"
          />
        </div>
      </Grid>
      <Grid item sm={6} xs={12} className={clsx(classes.row, classes.buttonsBox)}>
          <Button
            onClick={() => handleDeleteClick != null ? handleDeleteClick(data) : false }
            className={clsx(classes.btn, classes.removeBtn)}
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
      </Grid>
     </Grid>
    </div>
  );
};
