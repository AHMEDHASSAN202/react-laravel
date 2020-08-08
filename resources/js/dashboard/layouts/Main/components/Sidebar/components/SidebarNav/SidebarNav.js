/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, Collapse, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { isUrl } from '../../../../../../helpers/functions';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
  },
  btnParent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    verticalAlign: 'bottom'
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { modules, className, ...rest } = props;
  const [toggle, setToggle] = useState(null);
  const classes = useStyles();

  const handleToggle = (key) => {
    if (key == null || key == toggle) setToggle(null);
    else setToggle(key);
  }

  return (
    modules.map((module, key)=> (
    <React.Fragment key={key}>
      <List
        {...rest}
        className={clsx(classes.root, className)}>
          {module.map(page => (
            <React.Fragment key={page.title}>
            <ListItem
              className={classes.item}
              disableGutters
            >
              <>
                <Button
                  className={clsx(classes.button, classes.btnParent, (isUrl(page.href) || page.key === toggle) ? classes.active : '')}
                  component={CustomRouterLink}
                  to={page.href}
                  onClick={() => handleToggle(page.key || null)}
                >
                  <div>
                  <div className={classes.icon}>{page.icon}</div>
                  {page.title}
                  </div>
                  <div>
                  {(page.children) ? (page.key === toggle) ? <ExpandLess /> : <ExpandMore /> : ''}
                  </div>
                </Button>
              </>
            </ListItem>
            {!page.children ? null : (
              <Collapse in={page.key == toggle} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  { page.children.map(childPage => (
                    <Button
                      key={childPage.title}
                      className={clsx(isUrl(childPage.href) ? classes.active : '', classes.button, classes.nested)}
                      component={CustomRouterLink}
                      to={childPage.href}
                    >
                      <div className={classes.icon}>{childPage.icon}</div>
                      {childPage.title}
                    </Button>
                  )) }
                </List>
              </Collapse>
            )}
            </React.Fragment>
          ))}
      </List>
      {(key+1 != modules.length) ? <Divider /> : null }
    </React.Fragment>
    ))
  );

};

SidebarNav.propTypes = {
  className: PropTypes.string,
  modules: PropTypes.array.isRequired
};

export default SidebarNav;
