import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Link, useHistory} from "react-router-dom";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {connect} from "react-redux";
import store from './../index'
import axios from "axios";

const useStyles = makeStyles(theme => ({
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
}));

const LoginPage = () => {

    const classes = useStyles();

    const history = useHistory()

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const [open, setOpen] = React.useState(false);

    const [severity, setSeverity] = React.useState(undefined);

    const [messageInfo, setMessageInfo, ] = React.useState(undefined);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function login (username, password) {
        console.log(store.getState())
            const details = {
                'username': username,
                'password': password,
            }
            axios({
                method: 'POST',
                url: 'http://localhost:8080' + '/rest/Login',
                data: details,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            }).then(res => {
                    if (res.status === 200) {
                        const userDtos = res.data;
                        store.dispatch(loggingIn(userDtos))
                        history.push('/Map')
                        localStorage.setItem('loggedIn', "true")
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status === 400) {
                            setOpen(true);
                            setMessageInfo('Wrong username or password!')
                            setSeverity('error')
                        }
                    }
                });
        }

    function setValues () {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        login(username, password)
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
                                    <img
                                        src={'/static/images/logo-dark.png'}
                                        className="block"
                                    />
                                    <Typography variant="caption">
                                        Sign in with your app id to continue.
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
                                        <Button
                                            onClick={ () => setValues() }
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                        >
                                            Login
                                        </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/Forgot">
                                        <Button>Forgot password?</Button>
                                    </Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/Register">
                                        <Button>Create new account</Button>
                                    </Link>
                                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                                        <Alert onClose={handleClose} severity={severity}>
                                            {messageInfo}
                                        </Alert>
                                    </Snackbar>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export function loggingIn(userDtos) {
    return {
        type: 'loggedIn',
        userDtos: userDtos,
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

