import React from "react";
import TextField from '@material-ui/core/TextField';
import './Quiz.css';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class Canada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CanadaQuestions: null,
        }
    }

    componentDidMount() {
        console.log("hello")
        this.loadCanadaQuestions()
    }

    loadCanadaQuestions() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080' + '/rest/questions/Canada',
        })
            .then(response => {
                    this.setState ({
                    CanadaQuestions: response.data
                })
            })
    }

    showCanadaQuestions = (CanadaQuestions) => {
        return (
            <div className="questionFields">
                <TextField
                    fullWidth={1000}
                    rows={6}
                    multiline
                    label= {CanadaQuestions.questionText}
                    variant="outlined"
                />
            </div>

        )
    }

    render () {
        console.log(this.state.CanadaQuestions)
        return (
            <div className="questions">

                {this.state.CanadaQuestions !== null ? <div>
                        {
                            this.state.CanadaQuestions.map(CanadaQuestions => {
                                return this.showCanadaQuestions(CanadaQuestions);
                            })
                        }
                        <Grid item xs={12} sm={12} md={4} lg={4}
                              style={{
                                  marginTop: '20px',

                              }}>
                            <Button variant="contained" color="primary">
                                Submit Quiz
                            </Button>
                        </Grid>
                        <div className="score">
                            You Scored:   /7
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default Canada;