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
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import DoneIcon from '@material-ui/icons/Done';

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
  }
}));

export default props => {
  const {data, languages=[], handleChangeInput = null, handleUpdate = null, ...rest} = props;

  const classes = useStyles();

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
                  <TableCell>Key</TableCell>
                  {languages.map(lang => <TableCell key={Math.random()}>{lang.language_code}</TableCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((d, i) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={i}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        {d.translation_key}
                      </div>
                    </TableCell>
                    {languages.map((lang, lk) => (
                      <TableCell className={classes.cursor} key={lk}>
                        <FormControl variant="outlined">
                        <OutlinedInput
                          type='text'
                          value={d[lang.language_code]}
                          onChange={(e) => handleChangeInput(e, i, lang.language_code)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Update"
                                onClick={() => handleUpdate(d)}
                                edge="end"
                              >
                                <DoneIcon />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};
