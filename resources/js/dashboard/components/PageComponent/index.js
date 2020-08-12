import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ViewTitle from '../ViewTitle/ViewTitle';
import ViewWrapper from '../ViewWrapper';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default props => {
  const {title, ...rest} = props;
  const classes = useStyles();

  return (
    <ViewWrapper>
      <ViewTitle title={title} />
      <div className={classes.content}>
        { props.children }
      </div>
    </ViewWrapper>
  );
};
