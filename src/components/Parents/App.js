import React from 'react';
import classNames from 'classnames';
import { drawerWidth } from '../../styleVariables';
import WorldMap from "../Children/WorldMap";
import About from "../Children/About";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {compose} from "redux";
import SearchResults from "../Children/SearchResults";
import {Route, Switch, withRouter} from "react-router";
import Sidebar from "../Base UI/Sidebar";
import Header from "../Base UI/Header";
import {ApiHost} from "../../redux/actions/serverDetailsActions";
import QuestionManager from "../Children/QuestionManager";
import CreateQuiz from "../Children/CreateQuiz";
import Results from "../Children/Results";

const useStyles = theme => ({
  panel: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      minHeight: "calc(100vh - 64px)",
      paddingTop: "64px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      minHeight: "calc(100vh - 56px)",
      paddingTop: "56px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px)"
    },
    display: "flex",
    flexDirection: "row",
    flexGrow: 1
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(1) * 2,
    right: theme.spacing(1) * 3
  },
  content: {
    backgroundColor: '#FCEBF6',
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

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.ApiHost()
  }

  render() {

    const {classes} = this.props;

    return (

        <div>

          <Header/>

          <div className={classNames(classes.panel, "theme-dark")}>

            <Sidebar/>

            <main className={classNames(classes.content, classes[`content-left`], {[classes.contentShift]: this.props.opened, [classes[`contentShift-left`]]: this.props.opened})}>

              <Switch>
                <Route path="/create"><CreateQuiz/></Route>
                <Route path="/results"><Results/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/search"><SearchResults/></Route>
                <Route path="/quiz/:groupId"><QuestionManager/></Route>
                <Route exact path="/"><WorldMap/></Route>
              </Switch>

            </main>

          </div>

        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    opened: state.toggles.opened,
    userDtos: state.loggedInState.userDtos
  }
}

const mapDispatchToProps = {ApiHost};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles), withRouter)(App);
