import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import ViewTitle from '../ViewTitle/ViewTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AppContext } from '../../AppContext';
import ViewWrapper from '../ViewWrapper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(2)
  },
  content: {
    marginTop: theme.spacing(2),
  }
}));

export default props => {
  const {title, Table, titleCard, subTitleCard} = props;
  const {data} = useContext(AppContext);
  const classes = useStyles();

  return (
    <ViewWrapper>
      <ViewTitle title={title} />
      <div className={classes.content}>
          <Grid container>
              <Grid item xs={12} sm={12} md={7}>
                {data.sectionLoading ? <LinearProgress /> : ''}
                {Table}
              </Grid>
              <Grid item xs={12} sm={12} md={5}>
              <Card className={classes.card} variant="outlined">
              {props.children}
              </Card>
            </Grid>
          </Grid>
      </div>
    </ViewWrapper>
  );
};
