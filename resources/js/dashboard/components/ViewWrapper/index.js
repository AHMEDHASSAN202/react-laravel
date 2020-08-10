import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));

const ViewWrapper = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {props.children}
    </div>
  );
};

export default ViewWrapper;