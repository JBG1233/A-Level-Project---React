import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import {connect} from "react-redux";
import '../Css/App.css';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {CloseAlert} from "../../redux/actions/alertActions";

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
        backgroundColor: '#95B4CC'
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

class PreRegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
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
                                                Select on of the three options to continue
                                        </Typography>
                                    </div>
                                    <Link to={'/studentRegister'} style={{textDecoration: 'none'}}>
                                        <FormControlLabel
                                            control={<Checkbox value="student"/>}
                                            label="Student"
                                            className={classes.fullWidth}
                                        />
                                    </Link>
                                    <Link to={'/teacherRegister'} style={{textDecoration: 'none'}}>
                                        <FormControlLabel
                                            control={<Checkbox value="teacher"/>}
                                            label="Teacher"
                                            className={classes.fullWidth}
                                        />
                                    </Link>
                                    <Link to={'/userRegister'} style={{textDecoration: 'none'}}>
                                        <FormControlLabel
                                            control={<Checkbox value="user"/>}
                                            label="None of the above"
                                            className={classes.fullWidth}
                                        />
                                    </Link>
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

const mapStateToProps = (state) => ({
    severity: state.alert.severity,
    message: state.alert.message,
    alertOpen: state.alert.alertOpen
})

const mapDispatchToProps = {CloseAlert};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(PreRegisterPage);
