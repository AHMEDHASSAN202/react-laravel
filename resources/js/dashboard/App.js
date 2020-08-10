import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/css/index.css';
import validators from './helpers/validators';
import Routes from './Routes';
import { AppContext } from './AppContext';
import { AppState } from './AppState';
import { Reducer } from './Reducer';

import RTL from './helpers/RTL';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

const RoutingSystem = () => (
  <Router history={browserHistory}>
    <Routes />
  </Router>
);

export default () => {

  const [data, dispatch] = React.useReducer(Reducer, AppState);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{data, dispatch}}>
        {data.dir == 'rtl' ? <RTL><RoutingSystem /></RTL> : <RoutingSystem />}
      </AppContext.Provider>
    </ThemeProvider>
  );
}
