import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

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
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const RegisterPage = () => {

    const classes = useStyles();

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

    function register(username, password) {
        const details = {
            'username': username,
            'password': password,
        }
        axios({
            method: 'POST',
            url: 'http://localhost:8080/rest/Register',
            data: details,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }).then(response => {
            setOpen(true);
            setMessageInfo('Registration Successful!')
            setSeverity('success')

            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 409) {
                        setOpen(true);
                        setMessageInfo('Username is already taken, please use a different username!')
                        setSeverity('error')

                    }
                }
            })
    }

    function setValues () {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        register(username, password)
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
                                    <img
                                        src={'/static/images/logo-dark.png'}
                                        className="block"
                                        alt=""
                                    />
                                    <Typography variant="caption">
                                        Create an app id to continue
                                    </Typography>
                                </div>
                                <TextField
                                    id="username"
                                    label="Username"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    label="Confirm Password"
                                    className={classes.textField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                />
                                <Link to="/Register">
                                    <Button
                                        onClick={ () => setValues() }
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        type="submit"
                                    >
                                        Create your account
                                    </Button>
                                </Link>
                                <div className="pt-1 text-xs-center">
                                    <Link to="/Forgot">
                                        <Button>Forgot password?</Button>
                                    </Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/Login">
                                        <Button>Access your account</Button>
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

export default RegisterPage;
