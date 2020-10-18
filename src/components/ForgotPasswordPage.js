import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import {LoginTrue, RegisterTrue} from "../redux/actions";
import {compose} from "redux";
import {connect} from "react-redux";

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

class ForgotPasswordPage extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <div className={classNames(classes.session, classes.background)}>
                <div className={classes.content}>
                    <div className={classes.wrapper}>
                        <Card>
                            <CardContent>
                                <form>
                                    <div
                                        className={classNames(classes.logo, `text-xs-center pb-xs`)}>
                                        <img src={'/static/images/logo-dark.png'} className="block"/>
                                        <Typography variant="caption">
                                            Enter your email and we'll send you instructions on how to
                                            reset your password.
                                        </Typography>
                                    </div>
                                    <TextField
                                        id="email"
                                        label="Email Address"
                                        className={classes.textField}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        className="mt-1"
                                        type="submit">
                                        Send password reset
                                    </Button>
                                    <div className="pt-1 text-xs-center">
                                        <Button onClick={() => this.props.LoginTrue()}>Login</Button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button onClick={() => this.props.RegisterTrue()}>Create new account</Button>
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

const mapStateToProps = () => ({})

const mapDispatchToProps = {RegisterTrue, LoginTrue};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(ForgotPasswordPage);
