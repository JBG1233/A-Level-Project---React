import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import {connect} from "react-redux";
import PersonIcon from '@material-ui/icons/Person';
import '../Css/App.css';
import axios from "axios";
import {DrawerToggle, MenuToggle} from "../../redux/actions/togglesActions";
import {SearchResultsChange, UpdateQuestionState} from "../../redux/actions/questionsStateActions";
import {Logout} from "../../redux/actions/loggedInStateActions";
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from "@material-ui/core/Menu";
import {UpdateAlert, CloseAlert} from "../../redux/actions/alertActions";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import '../Css/Questions.css';

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
    borderRadius: '5px',
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
    this.keyPressed = this.keyPressed.bind(this);
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

    logout() {
      this.props.UpdateAlert("success", "Logout Successful")
      this.props.Logout()
    }

  getSearchResults() {
    let userInput = document.getElementById('search').value
    axios({
      method: 'GET',
      url: this.props.apiHost + '/rest/questions/search/' + userInput,
    })
        .then(response => {
          if (response.status === 200) {
            this.props.SearchResultsChange(response.data)
            this.props.history.push('/results')
          }
        }).catch(error => {
    })
  }

  keyPressed (event)  {
    if (event.key === 'Enter') {
      this.getSearchResults()
    }
  }

  CloseAlert(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.props.CloseAlert()
  };

render() {

  const { classes } = this.props;

  return (
      <div>
        <AppBar style={{backgroundColor: '#95B4CC'}} position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon onClick = {() => this.props.DrawerToggle()}/>
            </IconButton>
            <div className={classes.branding}>
              <Link to={'/'}>
                <div className="whiteTextHeader">
                  World Quiz
                </div>
              </Link>
            </div>
            <Hidden xsDown>
              <div className={classes.searchWrapper}>
                <div className={classes.searchForm}>
                  <IconButton aria-label="Search" className={classes.searchIcon}>
                    <SearchIcon onClick = {() => this.getSearchResults()}/>
                  </IconButton>
                  <input onKeyPress={this.keyPressed} id="search" className={classes.searchInput} type="text" placeholder="Search" autoFocus={true}/>
                </div>
              </div>
            </Hidden>
            <IconButton aria-owns={this.state.menuIsOpen ? 'user-menu' : null} onClick={(e) => this.handleMenuOpen(e)} aria-label="User Settings" aria-haspopup="true" color="inherit">
              <div className="space">
                <PersonIcon/>
              </div>
            </IconButton>
            <Menu id="user-menu" open={Boolean(this.state.menuIsOpen)} anchorEl={this.state.menuIsOpen}  onClose={() => this.handleMenuClose()}>
              {this.props.loggedIn ?
                  <div>
                    <MenuItem onClick={() => this.logout()}>
                      <ListItemIcon>
                        <LockOpenIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Logout"/>
                    </MenuItem>
                  </div>
                  :
                  <div>
                    <Link to={'/preLogin'}>
                      <MenuItem>
                        <ListItemIcon>
                          <LockOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Login"/>
                      </MenuItem>
                    </Link>
                  </div>}

              <MenuItem onClick={() => this.handleMenuClose()}>
                <ListItemIcon>
                  <CloseOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Close Menu"/>
              </MenuItem>
            </Menu>
            <IconButton aria-label="User Settings" aria-haspopup="true" color="inherit">
              <div className="space">
                <SettingsIcon/>
              </div>
            </IconButton>
          </Toolbar>
        </AppBar>
        {this.props.alertOpen ?
            <Snackbar open={this.props.alertOpen} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => this.CloseAlert()} >
              <Alert elevation={6} variant="filled" autoHideDuration={2000} onClose={() => this.CloseAlert()} severity={this.props.severity}>
                {this.props.message}
              </Alert>
            </Snackbar>
            : null }
      </div>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    menuOpen: state.toggles,
    loggedIn: state.loggedInState.loggedIn,
    apiHost: state.serverDetails.apiHost,
    severity: state.alert.severity,
    message: state.alert.message,
    alertOpen: state.alert.alertOpen,
  }
}

const mapDispatchToProps = {DrawerToggle, UpdateAlert, MenuToggle, CloseAlert, Logout, UpdateQuestionState, SearchResultsChange}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles), withRouter)(Header);
