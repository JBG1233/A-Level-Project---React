import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './Quiz.css';
import {loadUKQuestions} from "../components/Fetch";
import {connect} from "react-redux";


class UKQuiz extends React.Component {

    componentDidMount() {
        this.props.loadUKQuestions()
    }

    render () {
        return (
            <div className="questions">
                <Typography variant="body1" className="questionTitles">
                    {"Test Question 1"}
                </Typography>
                <form className="questionFields">
                    <TextField
                        fullWidth={1000}
                        rows={6}
                        multiline
                        label="Question 1 Answer"
                        variant="outlined" />
                </form>
            <br/>
                <Typography variant="body1" className="questionTitles">
                    {"Test Question 2 (This is going to be iterable)"}
                </Typography>
                <form className="questionFields">
                    <TextField
                        fullWidth={1000}
                        rows={6}
                        multiline
                        label="Question 2 Answer"
                        variant="outlined" />
                </form>
            </div>



    )
    }
}
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {loadUKQuestions}


export default connect(mapStateToProps, mapDispatchToProps)(UKQuiz);
