import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import ExploreIcon from "@material-ui/icons/Explore";
import PeopleIcon from "@material-ui/icons/People";
import Leaderboard from "./Leaderboard";
import InfoIcon from "@material-ui/icons/Info";
import About from "./About";
import {
  AboutTrue,
  HowitworksTrue,
  LeaderboardTrue,
  MapTrue,
  TimelineTrue,
  UpdateAlert,
  UpdateLeaderboardStatistics
} from "../redux/actions";
import {compose} from "redux";
import {connect} from "react-redux";
import Ripples from 'react-ripples'
import axios from "axios";
import FaceIcon from '@material-ui/icons/Face';
import BuildIcon from '@material-ui/icons/Build';

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
      },
      {
        name: 'Timeline',
        icon: FaceIcon,
      },
      {
        name: 'Leaderboard',
        icon: PeopleIcon,
      },
      {
        name: 'How it works',
        icon: BuildIcon,
      },
      {
        name: 'About',
        icon: InfoIcon,
      },
    ]

  }

}

changeComponent(index) {
  if (index === 0) {
    this.props.MapTrue()
  } else if (index === 1) {
    this.props.TimelineTrue()
  } else if (index === 2) {
    this.loadLeaderboardStatistics()
  } else if (index === 3 ) {
    this.props.HowitworksTrue()
  } else if (index === 4 ) {
    this.props.AboutTrue()
  }
}

loadLeaderboardStatistics () {
    axios({
      method: 'GET',
      url: this.props.apiHost + '/rest/leaderboard',
      headers: {
        "Authorization": this.props.userDtos.accessToken
      }
    })
        .then(response => {
          if (response.status === 200) {
            if (this.props.loggedIn !== false) {
              console.log(response.data)
              if (response.data === "") {
                this.props.UpdateAlert("warning", "Do some quizzes to populate your leaderboard!")
              } else {
                this.props.UpdateLeaderboardStatistics(response.data)
                this.props.LeaderboardTrue()
              }
            } else {
              this.props.UpdateAlert("warning", "Please login to access your scores")
            }
          }
        }).catch(error => {
    })
  }

showItems (item, index, classes) {
  return (<div style = {{width: '241px'}}>
    <Ripples>
        <div className={classes.menuLink} key={index} onClick = {() => this.changeComponent(index)}  style = {{width: '241px'}}>
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
  render () {

    const {classes} = this.props

    return (
        <div>
          {
            this.state.items.map((item, index) => {
              return this.showItems(item, index, classes)
            })
          }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedInState.loggedIn,
    userDtos: state.loggedInState.userDtos,
    apiHost: state.serverDetails.apiHost,
  }
}

const mapDispatchToProps = {
  HowitworksTrue,
  AboutTrue,
  LeaderboardTrue,
  MapTrue,
  UpdateAlert,
  UpdateLeaderboardStatistics,
  TimelineTrue,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(SidebarItem);
