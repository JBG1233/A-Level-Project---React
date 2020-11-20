import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import './App.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {connect} from "react-redux";
import {UpdateAlert} from "../redux/actions";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    submitContactForm () {
        if (!this.props.loggedIn) {
            this.props.UpdateAlert("error", "Please login to submit your message!")
        } else {
            const details = {
                "firstName": document.getElementById('firstName').value,
                "lastName": document.getElementById('lastName').value,
                "message": document.getElementById('message').value,
            }
            axios({
                method: "POST",
                url: this.props.apiHost + '/rest/contact',
                data: details,
                headers: {
                    "Authorization": this.props.username
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        this.props.UpdateAlert("success", "Message has been submitted!")
                    }
                }).catch(error => {
                    this.setState({
                        error: error
                    })
                }
            )
        }
    }

    render() {
        if (this.state.error !== null) {
            let message;
            if (this.state.error.response.status === 400) {
                message = "Wait 24 hours before sending another message!"
            } else if (this.state.error.response.status === 500) {
                message =  "Unable to send your message!"
            } else if (this.state.error.response.status === 403) {
                message =  "Illegal characters in your name are not allowed!"
            }
            this.props.UpdateAlert("error", message)
            this.setState({
                error: null
            })
        }
        return (
            <div className="aboutBackgroundImage">
                <div className="textHeader">
                    <AppBar position="static">
                        About Me!
                    </AppBar>
                </div>
                <div className="profilePic">
                    <img src={'/static/images/profile-pic.png'} alt="pfp here"/>
                </div>
                <div className="profilePic">
                    <div>Hello, I hope you have enjoyed the time you have spent on my quiz.
                        This is a project of mine that I have been working on for a couple months,
                        as a part of my A Level Computer Science coursework. I study Maths,
                        Economics, Business and Computer Science at a school north of London called
                        the RGS, Royal Grammar School. I plan to take software engineering at a higher
                        level so that I can do what I did here on a day to day basis. I plan on developing
                        this quiz until i am satisfied that it is as professional that it can be, with little
                        to no bugs. I encourage you to leave me a message by filling the form down below if
                        you have any questions, suggestions or ideas that may improve the quiz.
                    </div>
                </div>
                <div className="contactTextHeader">
                    <AppBar position="static">
                        Contact Me!
                    </AppBar>
                </div>
                <div className="contactMe">
                    <TextField
                        id="firstName"
                        label="First Name"
                        variant="outlined">
                    </TextField>
                </div>
                <div className="contactMe">
                    <TextField
                        id="lastName"
                        label="Last Name"
                        variant="outlined">
                    </TextField>
                </div>
                <div className="contactMe2">
                    <TextField
                        style = {{width: '34%'}}
                        id="message"
                        rows={4}
                        multiline
                        label="Message"
                        variant="outlined">
                    </TextField>
                </div>
                <div className="contactMeButton">
                    <Button variant="contained" color="primary" onClick={() => this.submitContactForm()}>
                        <div className="timelineTextHeader">
                            Submit Message
                        </div>
                    </Button>
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        apiHost: state.serverDetails.apiHost,
        loggedIn: state.loggedInState.loggedIn,
        username: state.loggedInState.userDtos.username
    }
}

const mapDispatchToProps = {UpdateAlert}

export default connect(mapStateToProps, mapDispatchToProps)(About);
