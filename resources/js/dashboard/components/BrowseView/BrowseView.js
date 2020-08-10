import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Toolbar from './Toolbar';
import ViewTitle from './../ViewTitle/ViewTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AppContext } from '../../AppContext';
import ViewWrapper from '../ViewWrapper';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default props => {
  const {title, ToolbarComponent = Toolbar, ...rest} = props;
  const {data} = useContext(AppContext);
  const classes = useStyles();

  return (
    <ViewWrapper>
      <ViewTitle title={title} />
      <ToolbarComponent {...rest} />
      <div className={classes.content}>
      {data.sectionLoading ? <LinearProgress /> : ''}
          { props.children }
      </div>
    </ViewWrapper>
  );
};
