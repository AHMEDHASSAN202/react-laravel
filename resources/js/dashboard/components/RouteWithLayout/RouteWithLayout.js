import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppContext } from '../../AppContext';
import { Loading } from '../LoadingPage/Loading';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  const {data} = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          {data.pageLoading ? <Loading /> : <Component {...matchProps} /> }
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
