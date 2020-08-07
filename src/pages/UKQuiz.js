import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './Quiz.css';
import Button from '@material-ui/core/Button';


class UKQuiz extends React.Component {
    render () {
        return (
            <div>
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
                    <Button
                        className="submitButtons"
                        variant="contained"
                        color="primary"
                        padding="25 25px">
                        Submit
                    </Button>
                </form>

            </div>


    )
    }
}

export default UKQuiz;
