import React, { useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppContext } from '../../AppContext';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        height: 'calc(100% - 64px)',
        width: 'calc(100% - 240px)',
        alignItems: 'center',
        position: 'fixed',
        backgroundColor: '#F4F6F8',
        zIndex: 1100,
      },
      active: {
        display: 'flex',
      },
      inActive: {
        display: 'none',
      }
}))

const Loading = () => {
    const classes = styles();
    const {data} = useContext(AppContext);
    return (
        <div className={clsx(classes.root, data.pageLoading ? classes.active : classes.inActive )}>
            <CircularProgress />
        </div>
    )
}

export default Loading;