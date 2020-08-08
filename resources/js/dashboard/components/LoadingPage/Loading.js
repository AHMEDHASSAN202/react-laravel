import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: '85vh',
        alignItems: 'center'
      }
}

export class Loading extends React.Component {
    render() {
        return (
            <div style={styles.root}>
                <CircularProgress />
            </div>
        )
    }
}