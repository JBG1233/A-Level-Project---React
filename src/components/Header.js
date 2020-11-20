import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import {connect} from "react-redux";
import {
  DrawerToggle,
  LoginTrue,
  Logout, MapTrue,
  MenuToggle,
  QuestionManagerTrue,
  SearchResultsChange,
  SearchResultsTrue,
  UpdateQuestionState
} from "../redux/actions";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import './App.css';
import axios from "axios";

const useStyles = theme => ({
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
});

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: null
    }
  }

  handleMenuOpen (e) {
    this.setState ({
      menuIsOpen: e.currentTarget
    })
  }

  handleMenuClose () {
      this.setState ({
        menuIsOpen: null
      })
    }

  getSearchResults () {
    let userInput = document.getElementById('search').value
    axios({
      method: 'GET',
      url: this.props.apiHost + '/rest/questions/search/' + userInput,
    })
        .then(response => {
          if (response.status === 200) {
            this.props.SearchResultsChange(response.data)
            this.props.SearchResultsTrue()
          }
        }).catch(error => {
    })
  }

render() {

  const { classes } = this.props;

  return (
      <div>
        <AppBar position="static" classNnpame={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon onClick = {() => this.props.DrawerToggle()}/>
            </IconButton>
            <div className={classes.branding}>
              <div className="whiteTextHeader" onClick={() => this.props.MapTrue()}>
                World Quiz
              </div>
            </div>
            <Hidden xsDown>
              <div className={classes.searchWrapper}>
                <form className={classes.searchForm}>
                  <IconButton aria-label="Search" className={classes.searchIcon}>
                    <SearchIcon onClick = {() => this.getSearchResults()}/>
                  </IconButton>
                  <input
                      id = "search"
                      className={classes.searchInput}
                      type="text"
                      placeholder="Search"
                      autoFocus={true}/>
                </form>
              </div>
            </Hidden>
            <Hidden smUp>
              <span className="flexSpacer"/>
            </Hidden>
            <Hidden smUp>
              <IconButton color="inherit" aria-label="Show searchbar">
                <SearchIcon/>
              </IconButton>
            </Hidden>
            <IconButton aria-owns={this.state.menuIsOpen ? 'user-menu' : null} onClick={(e) => this.handleMenuOpen(e)} aria-label="User Settings" aria-haspopup="true" color="inherit">
              <MoreVertIcon/>
            </IconButton>
              <Menu id="user-menu" open={Boolean(this.state.menuIsOpen)} anchorEl={this.state.menuIsOpen}  onClose={() => this.handleMenuClose()}>
                <MenuItem>
                  <ListItemIcon>
                    <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Settings"/>
                </MenuItem>
                      {this.props.loggedIn ?
                          <div>
                            <MenuItem onClick={() => this.props.Logout()}>
                              <ListItemIcon>
                                <LockOpenIcon/>
                              </ListItemIcon>
                              <ListItemText primary="Logout"/>
                            </MenuItem>
                          </div>
                          :
                          <div>
                            <MenuItem onClick={() => this.props.LoginTrue()}>
                              <ListItemIcon>
                                <LockOutlinedIcon/>
                              </ListItemIcon>
                              <ListItemText primary="Login"/>
                            </MenuItem>
                          </div>}

                <MenuItem onClick={(e) => this.handleMenuClose()}>
                  <ListItemIcon>
                    <CloseOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Close Menu"/>
                </MenuItem>
              </Menu>
          </Toolbar>
          <Hidden smUp>
            <Collapse timeout="auto" unmountOnExit>
              <Toolbar className={classes.toolBar}>
                <div className={classes.searchWrapper}>
                  <form className={classNames(classes.searchForm, 'mr-0')}>
                    <IconButton aria-label="Search" className={classes.searchIcon}>
                      <SearchIcon/>
                    </IconButton>
                    <input
                        className={classes.searchInput}
                        type="text"
                        placeholder="Sea rch"
                        autoFocus="true"/>
                  </form>
                </div>
              </Toolbar>
            </Collapse>
          </Hidden>
        </AppBar>
      </div>
    );
  };
}
const mapStateToProps = (state) => ({
  menuOpen: state.globalVariables,
  loggedIn: state.loggedInState.loggedIn,
  apiHost: state.serverDetails.apiHost
})

const mapDispatchToProps = {MapTrue, DrawerToggle, MenuToggle, LoginTrue, Logout, QuestionManagerTrue, UpdateQuestionState, SearchResultsTrue, SearchResultsChange}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(Header);
