import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { drawerWidth } from '../styleVariables';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import ExploreIcon from "@material-ui/icons/Explore";
import WorldMap from "../pages/WorldMap";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";

import Leaderboard from "../pages/Leaderboard";
import UKQuiz from "../pages/UKQuiz";
import About from "../pages/About";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    maxWidth: drawerWidth,
    height: '100%',
    zIndex: theme.zIndex.drawer + 99
  },
  modal: {
    [theme.breakpoints.down('sm')]: {
      top: '56px!important'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px!important'
    },
    zIndex: '1000!important'
  },
  backdrop: {
    [theme.breakpoints.down('sm')]: {
      top: '56px'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px'
    }
  }
}));



const Sidebar = ({ opened, toggleDrawer, location }) => {
  const classes = useStyles();
  const [activeRoute, setActiveRoute] = useState(undefined);
  const toggleMenu = index =>
    setActiveRoute(activeRoute === index ? undefined : index);

function items() {
  items = [
    {
      path: '/Map',
      name: 'Map',
      type: 'link',
      icon: ExploreIcon,
      component: WorldMap
    },
    {
      path: '/Leaderboard',
      name: 'Leaderboard',
      type: 'link',
      icon: PeopleIcon,
      component: Leaderboard
    },
    {
      path: '/About',
      name: 'About',
      type: 'link',
      icon: InfoIcon,
      component: About
    },
  ]
  return items
}

const menu = (

    <List component="div">
      {items().map((item, index) => {
        const isCurrentPath =
          location.pathname.indexOf(item.path) > -1 ? true : false;
        return (
          <SidebarItem
            key={index}
            index={index}
            item={item}
            activeRoute={activeRoute}
            toggleMenu={toggleMenu}
            currentPath={isCurrentPath}
          />
        );
      })}
    </List>
  );

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="persistent"
          classes={{
            paper: classes.drawerPaper
          }}
          open={opened}
          ModalProps={{
            keepMounted: false,
            className: classes.modal,
            BackdropProps: {
              className: classes.backdrop
            },
            onBackdropClick: toggleDrawer
          }}
        >
          {menu}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <SwipeableDrawer
          variant="temporary"
          classes={{
            paper: classes.drawerPaper
          }}
          open={opened}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          disableBackdropTransition={!iOS}
          ModalProps={{
            keepMounted: false,
            className: classes.modal,
            BackdropProps: {
              className: classes.backdrop
            },
            onBackdropClick: toggleDrawer
          }}
        >
          {menu}
        </SwipeableDrawer>
      </Hidden>
    </>
  );
};

Sidebar.prototypes = {
  opened: PropTypes.func,
  toggleDrawer: PropTypes.func,
  closeDrawer: PropTypes.func,
  openDrawer: PropTypes.func,
  routes: PropTypes.object
};

const SidebarWithRouter = withRouter(Sidebar);

export default withWidth()(SidebarWithRouter);
