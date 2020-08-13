import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import { SearchInput } from '../..';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  row: {
    height: '42px',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  }
}));

export default props => {

  const { className, handleChangeInputSearch = null, ...rest } = props;

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
            placeholder="Search"
          />
        </div>
      </Grid>
     </Grid>
    </div>
  );
};
