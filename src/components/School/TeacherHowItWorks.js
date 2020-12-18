import React from "react";
import '../Css/About.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {connect} from "react-redux";
import {UpdateAlert} from "../../redux/actions/alertActions";

class TeacherHowItWorks extends React.Component{

    getClassId() {
        this.props.UpdateAlert("info", "Your class id is: " + this.props.classId)
    }

    render () {
        return (
            <div>
                <div className="howItWorksMain">
                    <div className="textHeader">
                        <AppBar style={{backgroundColor: '#95B4CC'}} position="static">
                            <Toolbar variant="dense">
                                How everything works!
                            </Toolbar>
                        </AppBar>
                    </div>
                    <div className="howItWorks">
                        <div className="howItWorksFirst">
                            Make sure to sign in before attempting to view your leaderboard or play a quiz as you will be
                            denied. Once you have signed in you are able to attempt a quiz by selecting the appropriate
                            country, or historic time frame. Then you will be able to answer a different 7 questions about
                            the subject matter everytime you select the quiz. Once you have answered all - if you can! -
                            of the 7 questions submit your questions and you will be give a score out of 7. You an then
                            view your leaderboard by heading over to the leaderboard page, you will be given a few different
                            stats about the quizzes that you have taken. Eventually you will be able to see your students
                            location on the class leaderboard or the global leaderboard!
                        </div>
                        <div className="howItWorksFirst">
                            As you're a teacher you have the ability to create quizzes and assign them to your classes,
                            To create a quiz you are able to select the appropriate time frame, or country. Once selected
                            two options appear, on called view quizzes and the other, create quiz. Select the create quiz
                            and you will be taken to the create quiz page. Fill in the options and submit your created quiz.
                            Then you can view your created quiz by searching it up, once you have found it there is a button
                            that allows you to assign it to your students. When creating your account a classId was generated
                            specific to you, by pressing the button below you will be able to see your classId. Give this to your
                            students, tell them to enter it when they register, this will connect them to you.
                        </div>
                    </div>
                </div>
                <div className="classIdButton" onClick={() => this.getClassId()}> Get your classId! </div>
            </div>

    )
    }
}

const mapStateToProps = (state) => {
    return {
        classId: state.loggedInState.userDtos.classID,
    }
}

const mapDispatchToProps = {UpdateAlert};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHowItWorks);