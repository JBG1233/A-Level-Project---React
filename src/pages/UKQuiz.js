import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './Quiz.css';
import Button from '@material-ui/core/Button';


class UKQuiz extends React.Component {
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

export default UKQuiz;
