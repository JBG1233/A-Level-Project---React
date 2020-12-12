import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import SidebarItem from './SubSidebar';
import { drawerWidth } from '../../styleVariables';
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import {connect} from "react-redux";

const useStyles = theme => ({
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
});

class Sidebar extends React.Component {

  render() {

    const {classes} = this.props;

    return (
        <>
          <Hidden smDown>
            <Drawer
                variant="persistent"
                classes={{paper: classes.drawerPaper}}
                open={this.props.opened}>
              <List component="div">
                <div style={{width: '100%'}}>
                  <SidebarItem/>
                </div>
              </List>
            </Drawer>
          </Hidden>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    opened: state.toggles.opened,
  }
}
export default compose(connect(mapStateToProps), withStyles(useStyles))(Sidebar);
