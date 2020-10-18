import React from "react";
import './Quiz.css';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";


class QuestionManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionAnswers: [],
            score: null,
        }
    }

    submitQuestions() {
        const details = [
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[0]).value,
                "questionCode": this.props.questions[0].questionCode,
                "questionNumber": this.props.questions[0].questionNumber
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[1]).value,
                "questionCode": this.props.questions[1].questionCode,
                "questionNumber": this.props.questions[1].questionNumber
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[2]).value,
                "questionCode": this.props.questions[2].questionCode,
                "questionNumber": this.props.questions[2].questionNumber
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[3]).value,
                "questionCode": this.props.questions[3].questionCode,
                "questionNumber": this.props.questions[3].questionNumber
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[4]).value,
                "questionCode": this.props.questions[4].questionCode,
                "questionNumber": this.props.questions[4].questionNumber
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[5]).value,
                "questionCode": this.props.questions[5].questionCode,
                "questionNumber": this.props.questions[5].questionNumber
            },
            {
                "userQuestionAnswer": document.getElementById('abcdefg'[6]).value,
                "questionCode": this.props.questions[6].questionCode,
                "questionNumber": this.props.questions[6].questionNumber
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

                                {this.props.loggedIn && this.state.score === null ?
                                    <div>
                                        <Button variant="contained" color="primary" onClick = {() => this.submitQuestions()}>
                                            Submit Quiz
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
        questions: state.questionsState.questions
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionManager);
