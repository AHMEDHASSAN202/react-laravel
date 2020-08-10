import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }));

const ButtonLoading = (props) => {
    const classes = useStyles();
    const {btnLabel, loading, handleButtonClick, variant='outlined', color='primary'} = props;    
    return (
        <div className={classes.wrapper}>
            <Button
            variant={variant}
            color={color}
            disabled={loading}
            onClick={handleButtonClick}
            >
            {btnLabel}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
    );
}

export default ButtonLoading;