import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import {connect} from "react-redux";
import '../Css/App.css';
import {UpdateAlert, CloseAlert} from "../../redux/actions/alertActions";
import {Link} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

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
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
});

class UserRegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
    }

     register(username, password) {
        const details = {
            'username': username,
            'password': password,
        }
        axios({
            method: 'POST',
            url: this.props.apiHost + '/rest/user/register',
            data: details,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }).then(response => {
                this.props.UpdateAlert("success", "Registration Successful")
        }).catch(error => {
                this.setState ({
                    error: error
                })
            })
    }

    CloseAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
    };

    setRegisterValues() {
        const confirmPassword = document.getElementById('confirmPassword').value
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        if (confirmPassword === password) {
            this.register(username, password)
        } else {
            this.props.UpdateAlert("error", "Password's don't match up!")
        }
    }
    CloseAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.CloseAlert()
    };
    render() {

        const {classes} = this.props;

        if (this.state.error !== null) {
            let message;
            if (this.state.error.response.status === 409) {
                message = "User already exists, please sign in!"
            } else if (this.state.error.response.status === 500) {
                message =  "Unable to register you!"
            } else if (this.state.error.response.status === 400) {
                message = "Illegal characters are not allowed!"
            }
            this.props.UpdateAlert("error", message)
            this.setState({
                error: null
            })
        }

        return (
            <div className={classNames(classes.session, classes.background)}>
                {alert}
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
                                        <Typography variant="caption">
                                            Create an app id to continue
                                        </Typography>
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
                                    <TextField
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        className={classes.textField}
                                        type="password"
                                        fullWidth
                                        margin="normal"/>
                                        <Button
                                            onClick={() => this.setRegisterValues()}
                                            variant="contained"
                                            style={{marginTop:'15px', background: 'rgba(0, 0, 0, 0.1)'}}
                                            fullWidth>
                                            Create your account
                                        </Button>
                                    <div className="pt-1 text-xs-center">
                                        <Link to={'/forgot'} style= {{ textDecoration: 'none'}} >
                                            <Button>Forgot password?</Button>
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to={'/preLogin'} style={{textDecoration: 'none'}}>
                                            <Button>Login</Button>
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
        alertOpen: state.alert.alertOpen
    }
}

const mapDispatchToProps = {UpdateAlert, CloseAlert};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(UserRegisterPage);
