import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './Quiz.css';
import {loadUKQuestions} from "../components/Fetch";
import {connect} from "react-redux";



class UKQuiz extends React.Component {
    showQuestions = (UKQuestions, index) => {
        return (
            <div className="questions">
        <form className="questionFields">
            <TextField
                fullWidth={1000}
                rows={6}
                multiline
                label= {UKQuestions.questionText}
                variant="outlined"
            />
        </form>
            </div>
        )
    }

    render () {
        return (
            <div>
                {
                    this.props.questions.map((UKQuestions, index) => {
                        return this.showQuestions(UKQuestions, index);
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        questions: state.UKQuestions.UKQuestions
    }
}

const mapDispatchToProps = {loadUKQuestions}


export default connect(mapStateToProps, mapDispatchToProps)(UKQuiz);
