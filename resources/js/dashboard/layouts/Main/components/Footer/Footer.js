import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Link } from '@material-ui/core';

const Footer = props => {
  const { className, ...rest } = props;

  return (
    <div
      {...rest}
      className={className}
      style={{marginBottom: 15, textAlign: 'center'}}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://github.com/AHMEDHASSAN202"
          target="_blank"
        >
          AHMED HASSAN
        </Link>
        . 2020
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
