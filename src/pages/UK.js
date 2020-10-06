import React from "react";
import './Quiz.css';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import TextField from "@material-ui/core/TextField";


class UK extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UKQuestion: null,
            questionAnswers: [],
            score: null,
            setOpen: false,
        }
    }

    wait(ms){
        let start = new Date().getTime();
        let end = start;
        while(end < start + ms) {
            end = new Date().getTime();
        }
    }

    componentDidMount() {
        this.loadUKQuestions()
    }

    loadUKQuestions() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080' + '/rest/questions/UK',
        })
            .then(response => {
                this.setState ({
                    UKQuestions: response.data
                })
            })
    }

    submitUKQuestions() {
        

        const details = [
                {
                    "userQuestionAnswer": document.getElementById('abcdefg'[0]).value,
                    "questionCode": this.state.UKQuestions[0].questionCode,
                    "questionNumber": this.state.UKQuestions[0].questionNumber
                },
                {
                    "userQuestionAnswer": document.getElementById('abcdefg'[1]).value,
                    "questionCode": this.state.UKQuestions[1].questionCode,
                    "questionNumber": this.state.UKQuestions[1].questionNumber
                },
                {
                    "userQuestionAnswer": document.getElementById('abcdefg'[2]).value,
                    "questionCode": this.state.UKQuestions[2].questionCode,
                    "questionNumber": this.state.UKQuestions[2].questionNumber
                },
                {
                    "userQuestionAnswer": document.getElementById('abcdefg'[3]).value,
                    "questionCode": this.state.UKQuestions[3].questionCode,
                    "questionNumber": this.state.UKQuestions[3].questionNumber
                },
                {
                    "userQuestionAnswer": document.getElementById('abcdefg'[4]).value,
                    "questionCode": this.state.UKQuestions[4].questionCode,
                    "questionNumber": this.state.UKQuestions[4].questionNumber
                },
                {
                    "userQuestionAnswer": document.getElementById('abcdefg'[5]).value,
                    "questionCode": this.state.UKQuestions[5].questionCode,
                    "questionNumber": this.state.UKQuestions[5].questionNumber
                },
                {
                    "userQuestionAnswer": document.getElementById('abcdefg'[6]).value,
                    "questionCode": this.state.UKQuestions[6].questionCode,
                    "questionNumber": this.state.UKQuestions[6].questionNumber
                },
        ]
        axios({
            method: "POST",
            url: 'http://localhost:8080' + '/rest/Validation',
            data: details,
            headers: {
                'Authorization': JSON.parse(localStorage.getItem('userDtos')).accessToken
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

    showUKQuestions = (UKQuestions, index) => {
        return (
                <div className="questionFields" >
                    <TextField
                            id={"abcdefg"[index]}
                            fullWidth = {1000}
                            rows = {6}
                            multiline
                            label = {UKQuestions.questionText}
                            variant = "outlined">
                        </TextField>
                    </div>
            )
    }

    render () {
        return (
            <div className="questions">
                {this.state.score != null ? <img className="scores" src={'/static/images/arrow.png'} alt="" onClick={() => this.props.history.push("/Map")}/>
                    : null
                }
                {this.state.score != null ? <div className="score" onClick={() => this.props.history.push("/Map")}>Go back to world map view</div>
                    : null
                }
                {this.state.UKQuestions !== undefined ? <div>
                        {
                            this.state.UKQuestions.map((UKQuestions, index) => {
                                return this.showUKQuestions(UKQuestions, index)
                            })
                        }
                    <Grid
                          style={{
                              marginTop: '20px',

                          }}>
                        {!localStorage.getItem("loggedIn") ?
                            <div className="score">
                                Please login to submit your score!
                            </div>
                                :
                            <Button variant="contained" color="primary" onClick = {() => this.submitUKQuestions()}>
                                Submit Quiz
                            </Button>
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

export default UK;
