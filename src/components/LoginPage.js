import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {
    CloseAlert,
    ErrorTrue,
    ForgotPasswordTrue,
    Login,
    MapTrue,
    RegisterTrue,
    stayLoggedIn,
    UpdateAlert
} from "../redux/actions";
import {compose} from "redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import './App.css';

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
        backgroundColor: theme.palette.primary.main
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

    login(username, password) {
        const details = {
            'username': username,
            'password': password,
        }
        axios({
            method: 'POST',
            url: this.props.apiHost + '/rest/login',
            data: details,

        }).then(res => {
            if (res.status === 200) {
                this.props.Login(res.data)
                this.props.MapTrue()
                this.props.UpdateAlert("success", "Login Successful")
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
        console.log(document)
        this.login(username, password)
    }


    render() {
        const {classes} = this.props;
        if (this.state.error !== null) {
            let message;
            if (this.state.error.response.status === 400) {
                message = "Incorrect username or password!"
            } else if (this.state.error.response.status === 500) {
                message =  "Unable to log you in"
            }
            this.props.UpdateAlert("error", message)
            this.setState({
                error: null
            })
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
                                        color="primary"
                                        fullWidth>
                                        Login
                                    </Button>
                                    <div className="pt-1 text-md-center">
                                            <Button onClick = {() => this.props.ForgotPasswordTrue()}>Forgot password?</Button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Button onClick = {() => this.props.RegisterTrue()}>Create new account</Button>
                                        {this.props.alertOpen ?
                                            <Snackbar open={this.props.alertOpen} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => this.CloseAlert()} >
                                                <Alert elevation={6} variant="filled" autoHideDuration={2000} onClose={() => this.CloseAlert()} severity={this.props.severity}>
                                                    {this.props.message}
                                                </Alert>
                                            </Snackbar>
                                            : null }
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    severity: state.globalVariables.severity,
    message: state.globalVariables.message,
    alertOpen: state.globalVariables.alertOpen,
    apiHost: state.serverDetails.apiHost
})

const mapDispatchToProps = {Login, ForgotPasswordTrue, RegisterTrue, UpdateAlert, CloseAlert, MapTrue, ErrorTrue, stayLoggedIn};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(LoginPage);