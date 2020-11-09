import React from 'react';
import classNames from 'classnames';
import { drawerWidth } from '../styleVariables';
import WorldMap from "./WorldMap";
import Leaderboard from "./Leaderboard";
import About from "./About";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {compose} from "redux";
import Wrapper from "./Wrapper";
import QuestionManager from "./QuestionManager";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {CloseAlert} from "../redux/actions";
import Timeline from "./Timeline";
import HowItWorks from "./HowItWorks";
import ContactUs from "./ContactUs";

const useStyles = theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    minWidth: '0',
    width: '100%',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '-webkit-overflow-scrolling': 'touch'
  },
  'content-left': {
    [theme.breakpoints.up('md')]: {
      marginLeft: -drawerWidth
    }
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  }
});

class ChildComponents extends React.Component {

  constructor(props) {
    super(props);
  }

  CloseAlert(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.props.CloseAlert()
  };

  render() {

    const {classes} = this.props;
    return (

        <main className={classNames(classes.content, classes[`content-left`], {[classes.contentShift]: this.props.opened, [classes[`contentShift-left`]]: this.props.opened})}>

          {this.props.component === "WorldMap" ? <WorldMap/> : null}

          {this.props.component === "Timeline" ? <Timeline/> : null}

          {this.props.component === "Leaderboard" ? <Wrapper> <Leaderboard/> </Wrapper> : null}

          {this.props.component === "Howitworks" ? <HowItWorks/> : null}

          {this.props.component === "About" ? <About/> : null}

          {this.props.component === "QuestionManager" ? <QuestionManager/> : null}

          {this.props.component === "ContactUs" ? <ContactUs/> : null}

          {this.props.alertOpen ?
              <Snackbar open={this.props.alertOpen} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => this.CloseAlert()} >
                <Alert elevation={6} variant="filled" autoHideDuration={2000} onClose={() => this.CloseAlert()} severity={this.props.severity}>
                  {this.props.message}
                </Alert>
              </Snackbar>
              : null }

        </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    component: state.componentChange.component,
    opened: state.globalVariables.opened,
    severity: state.globalVariables.severity,
    message: state.globalVariables.message,
    alertOpen: state.globalVariables.alertOpen
  }
}

const mapDispatchToProps = {CloseAlert};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(ChildComponents);
