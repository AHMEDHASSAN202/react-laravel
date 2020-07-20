import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { SearchInput } from './../../../../components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

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
            className={classes.searchInput}
            placeholder="Search user"
          />
        </div>
      </Grid>
      <Grid  item sm={6} xs={12}>
        <div className={clsx(classes.row, classes.justifyEnd)}>
          <Button
          size="large"
            color="primary"
            variant="contained"
          >
            Add user
          </Button>
        </div>
      </Grid>
     </Grid>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
