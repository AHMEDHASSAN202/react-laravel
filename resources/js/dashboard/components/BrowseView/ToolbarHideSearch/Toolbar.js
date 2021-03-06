import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

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

  const { className, handleAddClick = null, handleDeleteClick = null, handleChangeInputSearch = null, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
     <Grid container>
     <Grid item sm={6} xs={12}></Grid>
      <Grid item sm={6} xs={12} className={clsx(classes.row, classes.buttonsBox)}>
          <Button
            onClick={() => handleDeleteClick != null ? handleDeleteClick(data) : false }
            className={clsx(classes.btn, classes.removeBtn)}
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            onClick={handleAddClick}
            className={classes.btn}
            color="primary"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Add {props.label}
          </Button>
      </Grid>
     </Grid>
    </div>
  );
};
