import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import '../Css/Questions.css';
import {UpdateAlert, CloseAlert} from "../../redux/actions/alertActions";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {UpdateQuestionState} from "../../redux/actions/questionsStateActions";
import {withRouter} from "react-router";
import {compose} from "redux";


class QuestionManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionAnswers: [],
            score: null,
            error: null,
            receivedQuestions: false,
        }
    }

    componentDidMount() {
        this.getQuestions()
    }

    CloseAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.CloseAlert()
    };

    getQuestions () {
        let path = this.props.history.location.pathname
        axios({
            method: 'GET',
            url: this.props.apiHost + '/rest/questions/main/' + path.substring(path.lastIndexOf('/') + 1),
        })
            .then(response => {
                this.props.UpdateQuestionState(response.data)
                this.setState({receivedQuestions: true})
            })
    }

    submitQuestions() {
        const details = [
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[0]).value,
                "groupId": this.props.questions[0].groupId,
                "questionId": this.props.questions[0].questionId
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[1]).value,
                "groupId": this.props.questions[1].groupId,
                "questionId": this.props.questions[1].questionId
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[2]).value,
                "groupId": this.props.questions[2].groupId,
                "questionId": this.props.questions[2].questionId
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[3]).value,
                "groupId": this.props.questions[3].groupId,
                "questionId": this.props.questions[3].questionId
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[4]).value,
                "groupId": this.props.questions[4].groupId,
                "questionId": this.props.questions[4].questionId
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[5]).value,
                "groupId": this.props.questions[5].groupId,
                "questionId": this.props.questions[5].questionId
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[6]).value,
                "groupId": this.props.questions[6].groupId,
                "questionId": this.props.questions[6].questionId
            },
        ]

        axios({
            method: "POST",
            url: this.props.apiHost + '/rest/validation',
            data: details,
            headers: {
                'Authorization': this.props.userDtos.accessToken
            },
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState ({
                        score: response.data
                    })
                    this.forceUpdate()
                } else {

                }
            }).catch(error => {
            this.setState({
                error: error
            })
        })
        this.setState({
            questionAnswers: [],
        })
    }

    showQuestions = (Questions, index) => {
        return (
            <div className="questionFields" >
                <TextField
                    id={"abcdefg"[index]}
                    fullWidth = {1000}
                    rows = {6}
                    multiline
                    label = {Questions.questionText}
                    variant = "outlined">
                </TextField>
            </div>
        )
    }

    render () {
        if (this.state.error !== null) {
            let message;
            if (this.state.error.response.status === 400) {
                message = "Illegal characters are not allowed!"
            } else if (this.state.error.response.status === 500) {
                message =  "Failed to submit your answers!"
            }
            this.props.UpdateAlert("error", message)
            this.setState({
                error: null
            })
        }
        return (
            <div className="questions">
                {this.props.questions !== undefined ? <div>
                        {
                            this.props.questions.map((Question, index) => {
                                return this.showQuestions(Question, index)
                            })
                        }
                        <Grid style={{marginTop: '20px',}}>
                            {!this.props.loggedIn ?
                                <div className="score">
                                    Please login to submit your score!
                                </div> : null}

                                {this.state.receivedQuestions && this.props.loggedIn && this.state.score === null ?
                                    <div>
                                        <Button variant="contained" color="primary" onClick = {() => this.submitQuestions()}>
                                            <div className="timelineTextHeader">
                                                Submit Quiz
                                            </div>
                                        </Button>
                                    </div>
                                        : null
                                }
                        </Grid>
                        <div className="score">
                            {this.state.score != null ? <div>
                                    You Scored:   {this.state.score} / 7
                                </div>
                                : null
                            }
                        </div>

                    </div>
                    : null
                }
                {this.props.alertOpen ?
                    <Snackbar open={this.props.alertOpen} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => this.CloseAlert()} >
                        <Alert elevation={6} variant="filled" autoHideDuration={2000} onClose={() => this.CloseAlert()} severity={this.props.severity}>
                            {this.props.message}
                        </Alert>
                    </Snackbar>
                    : null }
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        apiHost: state.serverDetails.apiHost,
        loggedIn: state.loggedInState.loggedIn,
        userDtos: state.loggedInState.userDtos,
        countryCode: state.questionsState.countryCode,
        questions: state.questionsState.questions,
        severity: state.alert.severity,
        message: state.alert.message,
        alertOpen: state.alert.alertOpen,
    }
}

const mapDispatchToProps = {UpdateAlert, CloseAlert, UpdateQuestionState}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(QuestionManager);
