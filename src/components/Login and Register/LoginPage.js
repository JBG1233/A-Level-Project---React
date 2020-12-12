import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {compose} from "redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import '../Css/App.css';
import {Login, stayLoggedIn} from "../../redux/actions/loggedInStateActions";
import {CloseAlert, UpdateAlert} from "../../redux/actions/alertActions";
import {Link} from "react-router-dom";
import {ApiHost} from "../../redux/actions/serverDetailsActions";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {withRouter} from "react-router";

const useStyles = theme => ({
    card: {
        overflow: "visible"
    },
    session: {
        position: "relative",
        zIndex: 4000,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    background: {
        backgroundColor: '#95B4CC',
    },
    content: {
        padding: `40px ${theme.spacing(1)}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 0 auto",
        flexDirection: "column",
        minHeight: "100%",
        textAlign: "center"
    },
    wrapper: {
        flex: "none",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto"
    },
    fullWidth: {
        width: "100%"
    },
    logo: {
        display: "flex",
        flexDirection: "column"
    }
});

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    componentDidMount() {
        this.props.ApiHost()
    }

    login(username, password) {
        const details = {
            'username': username,
            'password': password,
        }
        axios({
            method: 'POST',
            url: this.props.apiHost + '/rest/login/' + this.props.role,
            data: details,

        }).then(res => {
            if (res.status === 200) {
                this.props.Login(res.data)
                this.props.UpdateAlert("success", "Login Successful")
                this.props.history.push('/')
            }
        }).catch(error => {
            this.setState({
                error: error
            })
        })
    }

    CloseAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.CloseAlert()
    };

    stayLoggedIn() {
        this.props.stayLoggedIn()
    }

    setValues() {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        this.login(username, password)
    }

    render() {

        const {classes} = this.props;

        console.log(this.state.error)

        if (this.state.error !== null) {
            let message;
            if (this.state.error.response.status === 400) {
                message = "Incorrect username or password!"
            } else if (this.state.error.response.status === 500) {
                message =  "Unable to log you in"
            }
            this.props.UpdateAlert("error", message)
            this.setState({error: null})
        }

        return (
            <div className={classNames(classes.session, classes.background)}>
                <div className={classes.content}>
                    <div className={classes.wrapper}>
                        <Card>
                            <CardContent>
                                <form>
                                    <div
                                        className={classNames(classes.logo, `text-xs-center pb-xs`)}>
                                        <div className="blackTextHeader">
                                            World Quiz
                                        </div>
                                        <Typography variant="caption">Sign in with your username & password to continue.</Typography>
                                    </div>
                                    <TextField
                                        id="username"
                                        label="Username"
                                        className={classes.textField}
                                        fullWidth
                                        margin="normal"/>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        className={classes.textField}
                                        type="password"
                                        fullWidth
                                        margin="normal"/>
                                    <FormControlLabel
                                        onChange={e => this.stayLoggedIn(e)}
                                        control={<Checkbox value="checkedA"/>}
                                        label="Stayed logged in"
                                        className={classes.fullWidth}/>
                                    <Button
                                        onClick={() => this.setValues()}
                                        variant="contained"
                                        style={{background: 'rgba(0, 0, 0, 0.1)'}}
                                        fullWidth>
                                        Login
                                    </Button>
                                    <div className="pt-1 text-md-center">
                                        <Link to={'/forgot'} style={{textDecoration: 'none'}}>
                                            <Button>Forgot password?</Button>
                                        </Link>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to={'/preRegister'} style={{textDecoration: 'none'}}>
                                            <Button>Create new account</Button>
                                        </Link>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
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
        apiHost: state.serverDetails.apiHost,
        severity: state.alert.severity,
        message: state.alert.message,
        alertOpen: state.alert.alertOpen,
        role: state.sidebarItems.role
    }
}

const mapDispatchToProps = {ApiHost, Login, UpdateAlert, CloseAlert, stayLoggedIn};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles), withRouter)(LoginPage);