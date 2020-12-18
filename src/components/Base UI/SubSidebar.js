import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import {connect} from "react-redux";
import Ripples from 'react-ripples'
import axios from "axios";
import {UpdateLeaderboardStatistics} from "../../redux/actions/loggedInStateActions";
import {UpdateAlert, CloseAlert} from "../../redux/actions/alertActions";
import { Link } from "react-router-dom";
import {withRouter} from "react-router";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import ExploreIcon from "@material-ui/icons/Explore";
import FaceIcon from "@material-ui/icons/Face";
import PeopleIcon from "@material-ui/icons/People";
import BuildIcon from "@material-ui/icons/Build";
import InfoIcon from "@material-ui/icons/Info";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = theme => ({
  badge: {
    width: '20px',
    height: '20px',
    display: 'flex',
    zIndex: 1,
    flexWrap: 'wrap',
    fontSize: '0.75rem',
    alignItems: 'center',
    borderRadius: '50%',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  menuLink: {
    display: 'block'
  },
  menuItem: {
    cursor: 'pointer',
    width: '100%',
    paddingTop: theme.spacing(1) * 1.5,
    paddingBottom: theme.spacing(1) * 1.5
  },
  menuIcon: {
    marginLeft: theme.spacing(1) * 2,
    marginRight: theme.spacing(1) * 2
  },
  menuSubItem: {
    paddingLeft: '55px',
    paddingRight: '55px',
    paddingTop: theme.spacing(1) * 1.5,
    paddingBottom: theme.spacing(1) * 1.5
  },
  menuCollapsed: {
    backgroundColor: theme.palette.action.hover
  },
  menuActive: {
    backgroundColor: theme.palette.action.hover
  },
  menuClosed: {
    backgroundColor: 'transparent'
  },
  caret: {
    marginLeft: theme.spacing(1) * 2,
    marginRight: theme.spacing(1) * 2,
    minWidth: 0
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  },
});

class SidebarItem extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    items: [
      {
        name: 'Map',
        icon: ExploreIcon,
        path: ''
      },
      {
        name: 'Timeline',
        icon: FaceIcon,
        path: 'timeline'
      },
      {
        name: 'Leaderboard',
        icon: PeopleIcon,
        path: 'leaderboard'
      },
      {
        name: 'How it works',
        icon: BuildIcon,
        path: 'userHowItWorks'
      },
      {
        name: 'About',
        icon: InfoIcon,
        path: 'about'
      }
    ],
  }
}

componentDidMount() {
  this.checkForItems()
}

  checkForItems () {
    if (this.props.role === "student") {
      this.setState ({items:   [
          {
            name: 'Map',
            icon: ExploreIcon,
            path: ''
          },
          {
            name: 'Timeline',
            icon: FaceIcon,
            path: 'timeline'
          },
          {
            name: 'Leaderboard',
            icon: PeopleIcon,
            path: 'leaderboard'
          },
          {
            name: 'Your Classes',
            icon: MenuBookIcon,
            path: 'teachingGroups'
          },
          {
            name: 'How it works',
            icon: BuildIcon,
            path: 'studentHowItWorks'
          },
          {
            name: 'About',
            icon: InfoIcon,
            path: 'about'
          }
        ]})
    } else if (this.props.role === "teacher") {
      this.setState ({items:   [
          {
            name: 'Map',
            icon: ExploreIcon,
            path: ''
          },
          {
            name: 'Timeline',
            icon: FaceIcon,
            path: 'timeline'
          },
          {
            name: 'Leaderboard',
            icon: PeopleIcon,
            path: 'leaderboard'
          },
          {
            name: 'Your Students',
            icon: MenuBookIcon,
            path: 'studentGroups'
          },
          {
            name: 'How it works',
            icon: BuildIcon,
            path: 'teacherHowItWorks'
          },
          {
            name: 'About',
            icon: InfoIcon,
            path: 'about'
          }
        ]})
    }
}

loadLeaderboardStatistics () {
  if (this.props.loggedIn === false) {
    this.props.UpdateAlert("warning", "Please login to access your scores")
  } axios({
      method: 'GET',
      url: this.props.apiHost + '/rest/leaderboard',
      headers: {
        "Authorization": this.props.userDtos.accessToken
      }
    })
        .then(response => {
          if (response.status === 200) {
              if (response.data.answered === 0) {
                this.props.UpdateAlert("warning", "Do a quiz to populate your leaderboard!")
              } else {
                this.props.UpdateLeaderboardStatistics(response.data)
                this.props.history.push('/leaderboard')
              }
          }
        })
  }

  CloseAlert(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.props.CloseAlert()
  };

  showItems (item, index, classes) {
    if (item.name === "Leaderboard") {
      return (
          <div style = {{width: '241px'}}>
            <Ripples>
              <div className={classes.menuLink} key={index} style={{width: '241px'}} onClick={() => this.loadLeaderboardStatistics()}>
                <ListItem className={classes.menuItem}>
                  <ListItemIcon className={classes.menuIcon}>
                    <item.icon className={classes.menuIcon}/>
                  </ListItemIcon>
                  <Typography variant="body1" className="flexSpacer">
                    {item.name}
                  </Typography>
                </ListItem>
              </div>
            </Ripples>
          </div>
      )
    }
    else {
      return (
          <div style = {{width: '241px'}}>
            <Ripples>
              <Link to={`/${item.path}`}>
                <div className={classes.menuLink} key={index} style = {{width: '241px'}}>
                  <ListItem className={classes.menuItem}>
                    <ListItemIcon className={classes.menuIcon}>
                      <item.icon className={classes.menuIcon}/>
                    </ListItemIcon>
                    <Typography variant="body1" className="flexSpacer">
                      {item.name}
                    </Typography>
                  </ListItem>
                </div>
              </Link>
            </Ripples>
          </div>
      )
    }
  }
  render () {

    const {classes} = this.props

    return (
        <div>
          {
            this.state.items.map((item, index) => {
              return this.showItems(item, index, classes)
            })
          }

          {this.state.alertOpen ? <Alert/> : null}

          {this.props.alertOpen ?
              <Snackbar open={this.props.alertOpen} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => this.CloseAlert()} >
                <Alert elevation={6} variant="filled" autoHideDuration={2000} onClose={() => this.CloseAlert()} severity={this.props.severity}>
                  {this.props.message}
                </Alert>
              </Snackbar>
              : null }

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedInState.loggedIn,
    userDtos: state.loggedInState.userDtos,
    apiHost: state.serverDetails.apiHost,
    severity: state.alert.severity,
    message: state.alert.message,
    alertOpen: state.alert.alertOpen,
    role: state.loggedInState.userDtos.role,
  }
}

const mapDispatchToProps = {
  UpdateAlert,
  UpdateLeaderboardStatistics,
  CloseAlert,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles), withRouter)(SidebarItem);
