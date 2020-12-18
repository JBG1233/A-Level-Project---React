import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import '../Css/About.css';

class HowItWorks extends React.Component{
    render () {
        return (
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
                        stats about the quizzes that you have taken. Eventually you will be able to see your location
                        on the global leaderboard or the local leaderboard!
                    </div>
                    <div className="howItWorksFirst">
                        You are
                    </div>
                </div>
            </div>

        )
    }
}

export default HowItWorks