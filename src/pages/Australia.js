import React from "react";
import TextField from '@material-ui/core/TextField';
import './Quiz.css';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class Australia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AustraliaQuestions: null,
        }
    }

    componentDidMount() {
        this.loadAustraliaQuestions()
    }

    loadAustraliaQuestions() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080' + '/rest/questions/Australia',
        })
            .then(response => {
                this.setState ({
                    AustraliaQuestions: response.data
                })
            })
    }

    showAustraliaQuestions = (AustraliaQuestions) => {
        return (
            <div className="questionFields">
                <TextField
                    fullWidth={1000}
                    rows={6}
                    multiline
                    label= {AustraliaQuestions.questionText}
                    variant="outlined"
                />
            </div>

        )
    }

    render () {
        return (
            <div className="questions">

                {this.state.AustraliaQuestions !== null ? <div>
                        {
                            this.state.AustraliaQuestions.map(AustraliaQuestions => {
                                return this.showAustraliaQuestions(AustraliaQuestions);
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

export default Australia;