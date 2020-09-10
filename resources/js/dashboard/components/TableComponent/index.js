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
  CardActions,
  Checkbox,
} from '@material-ui/core';
import PaginationComponent from '../PaginationComponent';
import { AppContext } from '../../AppContext';
import { ALL_CHECKED } from '../../actions';

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
  },
  actions: {
    justifyContent: 'flex-end'
  },
}));

export default props => {
  const classes = useStyles();

  const {data, labels=[], handlePageChange, handleRowsPerPageChange, perpage=10, actions=true, hasCheckbox=true, count=null, ...rest} = props;

  const [selected, setSelected] = React.useState([]);

  const {dispatch} = React.useContext(AppContext);

  React.useEffect(() => {
    dispatch({
      TYPE: ALL_CHECKED,
      payload: selected
    })
  }, [selected])

    //handle select all checkbox
    const handleSelectAll = event => {
      let selectedData = []
      const { data } = props;
  
      if (event.target.checked) {
        selectedData = data.map((d, index) => index);
      } else {
        selectedData = [];
      }
  
      setSelected(selectedData);
    };
  
    //handle select one checkbox
    const handleSelectOne = (event, index) => {
      let newSelected = [];
  
      if (selected.indexOf(index) === -1) {
        newSelected = [...selected, index];
      } else {
        newSelected = selected.filter((i) => i != index);
      }
  
      setSelected(newSelected);
    };
  

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
                {hasCheckbox?<TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.length === data.length}
                      color="primary"
                      indeterminate={
                        selected.length > 0 &&
                        selected.length < data.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>:null}
                  {labels.map((label, ii) =><TableCell key={ii}>{label.title}</TableCell>)}
                  {actions?<TableCell>Actions</TableCell>:null}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((d, i) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={d.toString() + i}
                  >
                    {hasCheckbox?<TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.indexOf(i) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, i)}
                        value="true"
                      />
                    </TableCell>:null}
                    {labels.map((label, iii) => {
                      return (
                        <TableCell key={iii}>{label.call?label.call(d):d[label.name]}</TableCell>
                      );
                    })}
                    {actions?<TableCell>{props.children(d)}</TableCell>:null}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <PaginationComponent 
            handlePageChange={handlePageChange}
            handleRowsPerPageChange={handleRowsPerPageChange}
            perpage={perpage}
            count={count || data.length}
        />
      </CardActions>
    </Card>
  );
};
