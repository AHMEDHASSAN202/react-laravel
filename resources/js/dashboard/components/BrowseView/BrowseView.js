import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Toolbar from './Toolbar';
import Table from './Table';
import ViewTitle from './../ViewTitle/ViewTitle';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default props => {
  const {data, title, label, handleClickRow, handleChangeInputSearch, handleDeleteClick, handleAddClick, ...rest} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ViewTitle title={title} />
      <Toolbar label={label} handleChangeInputSearch={handleChangeInputSearch} handleDeleteClick={handleDeleteClick} handleAddClick={handleAddClick} {...rest} />
      <div className={classes.content}>
        <Table data={data} handleClickRow={handleClickRow} {...rest} />
      </div>
    </div>
  );
};
