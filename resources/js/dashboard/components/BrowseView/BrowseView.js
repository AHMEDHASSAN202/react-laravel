import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Toolbar from './Toolbar';
import ViewTitle from './../ViewTitle/ViewTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AppContext } from '../../AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default props => {
  const {title, ToolbarComponent = Toolbar, ...rest} = props;
  const {data} = useContext(AppContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ViewTitle title={title} />
      <ToolbarComponent {...rest} />
      <div className={classes.content}>
      {data.sectionLoading ? <LinearProgress /> : ''}
          { props.children }
      </div>
    </div>
  );
};
