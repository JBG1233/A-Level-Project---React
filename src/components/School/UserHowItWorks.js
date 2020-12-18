import React from "react";
import '../Css/About.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class UserHowItWorks extends React.Component{
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
                    <div>
                        Make sure to sign in before attempting to view your leaderboard or play a quiz as you will be
                        denied. Once you have signed in you are able to attempt a quiz by selecting the appropriate
                        country, or historic time frame. Then you will be able to answer a different 7 questions about
                        the subject matter everytime you select the quiz. Once you have answered all - if you can! -
                        of the 7 questions submit your questions and you will be give a score out of 7. You an then
                        view your leaderboard by heading over to the leaderboard page, you will be given a few different
                        stats about the quizzes that you have taken. Eventually you will be able to see your location
                        on the global leaderboard or the local leaderboard! (Your friends)
                    </div>
                    <div>
                        For non-school users or students you will not be able to create a quiz. However, you will be
                        able to play the quizzes that the teachers create by selecting "view quizzes" after selecting
                        a country. At the moment, there is no settings page, in the future there will be, and when there
                        is you will be able to add friends within the platform. This will enable you to have a friend
                        leaderboard. If you are unsuccessful with your answers and don't know why, it is likely that the
                        validation I have used is slightly wrong, send me a message via the about page with the question
                        in hand. If you do decide to send me a message via the about page, just know that any inappropriate
                        messages are automatically deleted before ending up in the database, so don't try!
                    </div>
                </div>
            </div>

        )
    }
}

export default UserHowItWorks