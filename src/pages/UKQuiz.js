import React from "react";
import TextField from '@material-ui/core/TextField';
import './Quiz.css';
import {loadUKQuestions} from "../components/Fetch";
import {connect} from "react-redux";



class UKQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: 0,
        }
    }

    showQuestions = (UKQuestions) => {
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
                    this.props.questions.map((UKQuestions) => {
                        return this.showQuestions(UKQuestions);
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
