import React from "react";
import TextField from '@material-ui/core/TextField';
import './Quiz.css';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class China extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ChinaQuestions: null,
        }
    }

    componentDidMount() {
        this.loadChinaQuestions()
    }

    loadChinaQuestions() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080' + '/rest/questions/China',
        })
            .then(response => {
                this.setState ({
                    ChinaQuestions: response.data
                })
            })
    }

    showChinaQuestions = (ChinaQuestions) => {
        return (
            <div className="questionFields">
                <TextField
                    fullWidth={1000}
                    rows={6}
                    multiline
                    label= {ChinaQuestions.questionText}
                    variant="outlined"
                />
            </div>

        )
    }

    render () {
        return (
            <div className="questions">

                {this.state.ChinaQuestions !== null ? <div>
                        {
                            this.state.ChinaQuestions.map(ChinaQuestions => {
                                return this.showChinaQuestions(ChinaQuestions);
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

export default China;