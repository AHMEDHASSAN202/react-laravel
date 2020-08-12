import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import DropDownMenu from './../../../../components/DropDownMenu/DropDownMenu';
import SelectComponent from '../../../../components/Inputs/SelectComponent';
import { getLanguages, getCurrentLanguage } from '../../../../helpers/functions';
import { AppContext } from '../../../../AppContext';


const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  logo: {
    color: "#ffffff"
  },
  lang: {
    '& > *': {
      color: '#fff',
    }
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
  ]);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const {data} = React.useContext(AppContext);

  const handleClickIconButton = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLangChange = (e) => {
    //send request for set current user language
    //refresh window 
  }

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/dashboard">
          <img
            alt="Logo"
            src="/images/logos/logo.png"
          />
          {/* <Typography variant="h2" className={classes.logo}>eCommerce</Typography> */}
        </RouterLink>
        <div className={classes.flexGrow} />

        <IconButton
              color="inherit"
          >
              <SelectComponent options={data.languages} handleChange={handleLangChange} value={data.currentLanguage.value} className={classes.lang} />
          </IconButton>
        <IconButton color="inherit" aria-haspopup="true" aria-controls="notification-menu" aria-label="Open Notificattion"
                    onClick={handleClickIconButton} >
            <Badge
                badgeContent={notifications.length}
                color="secondary"
            >
                <NotificationsIcon />
            </Badge>
        </IconButton>
        <IconButton
              className={classes.signOutButton}
              color="inherit"
          >
              <InputIcon />
          </IconButton>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <DropDownMenu
          id={"notification-menu"}
          options={notifications}
          anchorEl={anchorEl}
          handleMenuItemClick={handleMenuItemClick}
          handleClose={handleClose}
        />
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
