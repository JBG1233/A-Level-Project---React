import React, { useState } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: '0 1px 8px rgba(0,0,0,.3)',
    position: 'relative',
    zIndex: theme.zIndex.drawer + 100,
    [theme.breakpoints.down('sm')]: {
      position: 'fixed'
    }
  },
  toolBar: {
    paddingLeft: theme.spacing(1) / 2,
    paddingRight: theme.spacing(1) / 2
  },
  branding: {
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    lineHeight: '50px',
    padding: `0 64px 0 0`
  },
  logo: {
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '80px'
    }
  },
  searchWrapper: {
    flex: '1 1 0%',
    boxSizing: ' border-box'
  },
  searchForm: {
    background: 'white',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(1) * 2,
    display: 'block',
    maxWidth: '800px'
  },
  searchInput: {
    fontSize: '1rem',
    padding: theme.spacing(1) * 1.9,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1) * 1.2
    },
    cursor: 'text',
    textIndent: '30px',
    border: 'none',
    background: 'transparent',
    width: '100%',
    outline: '0'
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: '0',
    marginTop: '-24px',
    color: 'rgba(0,0,0,.87)'
  }
}));

const Header = ({logo, logoAltText, toggleDrawer}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const handleSettingsToggle = event => setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  const handleSearchExpandToggle = () => setSearchExpanded(!searchExpanded);

  const handleDrawerToggle = () => {
    toggleDrawer();
    if (searchExpanded) handleSearchExpandToggle();
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <div className={classes.branding}>
          <img src={logo} alt={logoAltText} className={classes.logo} />
        </div>

        <Hidden xsDown>
          <div className={classes.searchWrapper}>
            <form className={classes.searchForm}>
              <IconButton aria-label="Search" className={classes.searchIcon}>
                <SearchIcon />
              </IconButton>
              <input
                className={classes.searchInput}
                type="text"
                placeholder="Search"
                autoFocus={true}
              />
            </form>
          </div>
        </Hidden>

        <Hidden smUp>
          <span className="flexSpacer" />
        </Hidden>

        <Hidden smUp>
          <IconButton
            color="inherit"
            onClick={handleSearchExpandToggle}
            aria-expanded={searchExpanded}
            aria-label="Show searchbar"
          >
            <SearchIcon />
          </IconButton>
        </Hidden>



        <IconButton
          aria-label="User Settings"
          aria-owns={anchorEl ? 'user-menu' : null}
          aria-haspopup="true"
          color="inherit"
          onClick={handleSettingsToggle}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
          <Link to="./Login">
          <MenuItem onClick={handleCloseMenu}>
                <ListItemIcon>
                    <ExitToAppIcon/>
                </ListItemIcon>
                <ListItemText primary="Login"/>
            </MenuItem>
          </Link>
        </Menu>
      </Toolbar>
      <Hidden smUp>
        <Collapse in={searchExpanded} timeout="auto" unmountOnExit>
          <Toolbar className={classes.toolBar}>
            <div className={classes.searchWrapper}>
              <form className={classNames(classes.searchForm, 'mr-0')}>
                <IconButton aria-label="Search" className={classes.searchIcon}>
                  <SearchIcon />
                </IconButton>
                <input
                  className={classes.searchInput}
                  type="text"
                  placeholder="Search"
                  autoFocus="true"
                />
              </form>
            </div>
          </Toolbar>
        </Collapse>
      </Hidden>
    </AppBar>
  );
};

Header.prototypes = {
  logo: PropTypes.string,
  logoAltText: PropTypes.string
};

export default Header;
