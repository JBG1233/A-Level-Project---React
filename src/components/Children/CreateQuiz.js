import React from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {CloseAlert, UpdateAlert} from "../../redux/actions/alertActions";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class CreateQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            labels: [
                "Question 1" , "Question 2", "Question 3","Question 4","Question 5","Question 6","Question 7",
                "Answer 1" , "Answer 2", "Answer 3","Answer 4","Answer 5","Answer 6","Answer 7"
            ]
        }
    }

    setQuizValues() {
        const quizName = document.getElementById('quizName').value
        const author = document.getElementById('author').value
        const searchTerm = document.getElementById('searchTerm').value
        const description = document.getElementById('description').value
        const questionOne = document.getElementById('Question 1').value
        const questionTwo = document.getElementById('Question 2').value
        const questionThree = document.getElementById('Question 3').value
        const questionFour = document.getElementById('Question 4').value
        const questionFive = document.getElementById('Question 5').value
        const questionSix = document.getElementById('Question 6').value
        const questionSeven = document.getElementById('Question 7').value
        const answerOne = document.getElementById('Answer 1').value
        const answerTwo = document.getElementById('Answer 2').value
        const answerThree = document.getElementById('Answer 3').value
        const answerFour = document.getElementById('Answer 4').value
        const answerFive = document.getElementById('Answer 5').value
        const answerSix = document.getElementById('Answer 6').value
        const answerSeven = document.getElementById('Answer 7').value
        this.createQuizGroup(quizName, author, searchTerm, description)
        this.createQuestions(questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerSeven )
    }

    createQuizGroup (quizName, author, searchTerm, description) {
        const quizGroup = {
            'quizName': quizName,
            'authorName': author,
            'searchTerm': searchTerm,
            'quizDescription': description,
        }
        axios({
            method: 'POST',
            url: this.props.apiHost + '/rest/create/quizGroup',
            data: quizGroup,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }).then(response => {
            this.props.UpdateAlert("success", "Quiz Created")
        }).catch(error => {
            this.setState ({
                error: error
            })
        })
    }

    createQuestions (questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven) {
        const questions = [
            {
                'questionText': questionOne ,
                'questionAnswer': answerOne,
            },
            {
                'questionText': questionTwo ,
                'questionAnswer': answerTwo,
            },
            {
                'questionText': questionThree ,
                'questionAnswer': answerThree,
            },
            {
                'questionText': questionFour ,
                'questionAnswer': answerFour,
            },
            {
                'questionText': questionFive ,
                'questionAnswer': answerFive,
            },
            {
                'questionText': questionSix ,
                'questionAnswer': answerSix,
            },
            {
                'questionText': questionSeven ,
                'questionAnswer': answerSeven,
            },
        ]
        axios({
            method: 'POST',
            url: this.props.apiHost + '/rest/create/questions',
            data: questions,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }).then(response => {
            this.props.UpdateAlert("success", "Questions Created")
        }).catch(error => {
            this.setState ({
                error: error
            })
        })
    }

    displayCreateBoxes = (labels, index) => {
            return (
            <div>
                <TextField
                    rows = {1}
                    multiline
                    id = {labels}
                    label = {labels}
                    variant = "outlined">
                </TextField>
            </div>
        )
    }

    render() {
        console.log(this.state.labels[0])
        return (
            <div>
                <div className="createTextHeader">
                    <AppBar style={{backgroundColor: '#95B4CC'}} position="static">
                        Create a Quiz!
                    </AppBar>
                </div>
                <div className="createFields">
                    <div className="createQuizFields">
                        <div className="subCreateTextHeader">
                            <AppBar style={{backgroundColor: '#95B4CC'}} position="static">
                                Create the quiz!
                            </AppBar>
                        </div>
                        <div className="createQuizFields2">
                            <div>
                                <TextField
                                    rows = {1}
                                    multiline
                                    id = "quizName"
                                    label = "Quiz Name"
                                    variant = "outlined">
                                </TextField>
                            </div>
                            <div>
                                <TextField
                                    rows = {1}
                                    multiline
                                    id = "searchTerm"
                                    label = "Search Term"
                                    variant = "outlined">
                                </TextField>
                            </div>
                            <div>
                                <TextField
                                    rows = {1}
                                    multiline
                                    id = "author"
                                    label = "Author"
                                    variant = "outlined">
                                </TextField>
                            </div>
                            <div>
                                <TextField
                                    rows = {5}
                                    multiline
                                    id = "description"
                                    label = "Quiz Description"
                                    variant = "outlined">
                                </TextField>
                            </div>
                            <div className="createQuizButton">
                                <Button style={{backgroundColor: '#95B4CC', color: 'white', fontSize: '20px', fontFamily: 'Ubuntu'}}  onClick={() => this.setQuizValues()}>
                                    Submit Message
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="createQuestionFieldsHeader">
                        <div className="subCreateQuestionTextHeader">
                            <AppBar style={{backgroundColor: '#95B4CC'}} position="static">
                                Create the questions!
                            </AppBar>
                        </div>
                    </div>

                        <div className="createQuestionFields">
                            {
                                this.state.labels.map((label, index) => {
                                    return this.displayCreateBoxes(label, index)
                                })
                            }
                        </div>
                </div>
            </div>
        )
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(CreateQuiz);
