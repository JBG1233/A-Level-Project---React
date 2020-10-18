import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import ChildComponents from "./ChildComponents";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {Dev, Prod} from "../redux/actions";

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
  }
});

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    env: 'dev'
  }
}
  componentDidMount() {
    if (this.props.env === 'dev') {
      this.props.Dev()
    } else if (this.props.env === 'prod') {
      this.props.Prod()
    }
  }

  componentWillUnmount() {
    if (this.props.loggedIn === true) {
      if (this.props.stayLoggedIn === false) {
        localStorage.clear()
      }
    }
  }

  render() {

    const {classes} = this.props;

    return (

      <div>

        {this.props.component === 'LoginPage' ? <LoginPage/> : null }

        {this.props.component === 'RegisterPage' ? <RegisterPage/> : null }

        {this.props.component === 'ForgotPasswordPage' ? <ForgotPasswordPage/> : null }

        {this.props.component !== 'LoginPage' && this.props.component !== 'RegisterPage' && this.props.component !== 'ForgotPasswordPage' ? <Header/> : null }

          <div className={classNames(classes.panel, "theme-dark")}>

            {this.props.component !== 'LoginPage' && this.props.component !== 'RegisterPage' && this.props.component !== 'ForgotPasswordPage' ? <Sidebar/> : null }

            <ChildComponents/>

        </div>



      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    component: state.componentChange.component,
    stayLoggedIn: state.loggedInState.stayLoggedIn
  }
}

const mapDispatchToProps = {Dev, Prod}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(App);
