import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
import '../Css/App.css';
import {SearchResultsChange} from "../../redux/actions/questionsStateActions";
import {withRouter} from "react-router";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AssessmentIcon from '@material-ui/icons/Assessment';
import Menu from "@material-ui/core/Menu";
import ListItemText from "@material-ui/core/ListItemText";
import CreateIcon from '@material-ui/icons/Create';
import {UpdateAlert} from "../../redux/actions/alertActions";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = theme => ({
  timeline: {
    '&::before': {
      position: 'absolute',
      textDecoration: 'none',
      top: '6%',
      width: '4px',
      height: '95%',
      content: '""',
      backgroundColor: 'LightBlue',
      left: '4px',
      [theme.breakpoints.up('lg')]: {
        left: '50%',
        marginLeft: '-2px'
      }
    },
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1) * 2
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1) * 3
    }
  },
  icon: {
    backgroundColor: 'Orange',
    position: 'absolute',
    top: '15px',
    width: '12px',
    height: '12px',
    textAlign: 'center',
    borderRadius: '50%',
    left: '0',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '2px',
      left: '2px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: theme.palette.background.paper,
    },
    [theme.breakpoints.up('lg')]: {
      left: '50%',
      marginLeft: '-6px'
    }
  },
  card: {
    position: 'relative',
    cursor: 'pointer',
    margin: '40px 0',
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    '&:first-child': {
      marginTop: 0
    }
  },
  content: {
    position: 'relative',
    marginLeft: '30px',
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    [theme.breakpoints.up('lg')]: {
      width: '47%',
      marginLeft: 0
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '30px'
    }
  },
  body: {
    float: 'left',
    display: 'inline-block',
    margin: 0,
    padding: '16px',
    '&::before': {
      position: 'absolute',
      top: '11px',
      width: 0,
      height: 0,
      content: '""',
      pointerEvents: 'none',
      borderWidth: '10px',
      borderStyle: 'solid',
      right: '100%',
      borderColor: `transparent ${theme.palette.divider} transparent transparent`
    },
    '&::after': {
      position: 'absolute',
      top: '12px',
      width: 0,
      height: 0,
      content: '""',
      pointerEvents: 'none',
      borderWidth: '9px',
      borderStyle: 'solid',
      right: '100%',
      borderColor: `transparent ${theme.palette.background.paper} transparent transparent`
    },
    [theme.breakpoints.down('md')]: {
      float: 'left',
      marginBottom: 0
    }
  },
  date: {
    display: 'inline-block',
    padding: '4px 0 10px',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      top: '7px',
      width: '100%',
      left: '112%'
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 0,
      width: '100%',
      left: 'auto'
    }
  },
  contentOdd: {
    [theme.breakpoints.up('lg')]: {
      float: 'right'
    }
  },
  contentEven: {
    [theme.breakpoints.up('lg')]: {
      float: 'left'
    }
  },
  dateOdd: {
    [theme.breakpoints.up('lg')]: {
      right: '112%',
      left: 'auto',
      textAlign: 'right'
    }
  },
  bodyEven: {
    [theme.breakpoints.up('lg')]: {
      float: 'right',
      '&::before': {
        position: 'absolute',
        right: 'auto',
        left: '100%',
        borderColor: `transparent transparent transparent ${theme.palette.divider}`
      },
      '&::after': {
        position: 'absolute',
        right: 'auto',
        left: '100%',
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`
      }
    }
  },
});

class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: [
        {
          date: '20th Century',
          id: '1900H'
        },
        {
          date: '19th Century',
          id: '1800H'
        },
        {
          date: '18th Century',
          id: '1700H'
        },
        {
          date: '17th Century',
          id: '1600H'
        },
        {
          date: '16th Century',
          id: '1500H'
        },
        {
          date: '15th Century',
          id: '1400H'
        },
        {
          date: '14th Century',
          id: '1300H'
        },
      ],
      timelines: [{name: 'AMERICAN HISTORY', id: 'AMERICA'}, {name: 'EUROPEAN HISTORY', id: 'EUROPE'}, {name: 'ASIAN HISTORY', id: 'ASIA'}],
      menuIsOpen: false,
      currentItem: [],
      groupId: null,
    }
  }

  getQuestions() {
    axios({
      method: 'GET',
      url: this.props.apiHost + '/rest/questions/view/' + this.state.groupId,
    })
        .then(response => {
          if (response.status === 200) {
            this.props.SearchResultsChange(response.data)
            this.props.history.push('/results')
          }
        })
  }

  createQuiz() {
    if (this.props.role === "teacher") {
      this.props.history.push("/createQuiz")
    } else {
      this.props.UpdateAlert("error", "You don't have the correct permissions to create a quiz!")
    }
  }

  changeComponent(groupId, currentItem, e) {
    this.setState({
      menuIsOpen: e.currentTarget,
      groupId: groupId + currentItem.id,
    })
  }

  handleMenuClose () {
    this.setState ({
      menuIsOpen: false,
    })
  }

  render() {

    const {classes} = this.props;

    return (
        <div>
          {this.state.timelines.map((timeline) => (
              <div style={{display: 'inline-block', minWidth: '27%', marginLeft: '4.3%'}} className={classes.timeline}>
                {timeline.name && (
                    <div className={classNames(classes.card, 'text-lg-center')}>
                      <Button onClick={() => this.props.history.push('/userHowItWorks')} variant="contained" style={{background: 'rgba(0, 0, 0, 0.1)'}}>
                        <div className="timelineTextHeader">
                          {timeline.name}
                        </div>
                      </Button>
                    </div>
                )}
                {this.state.dates.map((item, index) => (
                    <div key={index} className={classes.card}>
                      <div className={classes.icon}/>
                      <section className={classNames(classes.content, index % 2 ? classes.contentOdd : classes.contentEven)}>
                        <Typography aria-owns={this.state.menuIsOpen ? 'user-menu' : null} onClick={(e)=> this.changeComponent(timeline.id, item, e)} aria-label="User Settings" aria-haspopup="true" color="inherit" variant="body1" component="div" className={classNames(classes.date, index % 2 ? classes.dateOdd : classes.dateEven)}>
                          {item.date}
                        </Typography>
                      </section>
                      <div className={classes.card}>
                        <div className={classNames(classes.bgDanger)} style={{top: 0}}/>
                      </div>
                    </div>
                ))
                }
              </div>
          ))}
          <Menu id="user-menu" open={Boolean(this.state.menuIsOpen)} anchorEl={this.state.menuIsOpen} onClose={() => this.handleMenuClose()}>
            <MenuItem onClick={() => this.getQuestions()}>
              <ListItemIcon>
                <AssessmentIcon/>
              </ListItemIcon>
              <ListItemText primary="View quizzes!"/>
            </MenuItem>
            <MenuItem onClick={() => this.createQuiz()}>
              <ListItemIcon>
                <CreateIcon/>
              </ListItemIcon>
              <ListItemText primary="Create a quiz!"/>
            </MenuItem>
          </Menu>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    apiHost: state.serverDetails.apiHost,
    role: state.loggedInState.userDtos.role
  }
}

const mapDispatchToProps = {SearchResultsChange, UpdateAlert}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles), withRouter)(Timeline);
