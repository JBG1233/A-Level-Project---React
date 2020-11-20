import React from "react";
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class HowItWorks extends React.Component{
    render () {
        return (
            <div className="howItWorksBackgroundImage">
                <div className="textHeader">
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            How everything works!
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="howItWorks">
                    <div className="howItWorksFirst">
                        Remember to create an account or login before completing the instructions
                        below as you will be unable to submit your answers and unable to access
                        your leaderboard stats. For the Map, decide what country you would like
                        to take a quiz for, press the marker hovering over the country. You should be
                        taken to a page with 7 questions, answer as many as you can and submit your answer.
                        After submitting your answers you will be able to see your updated leaderboard stats
                        at the leaderboard page, eventually you will be able to compare your results with the
                        top 5 in the world.
                    </div>
                    <br/>
                    <div className="howItWorksSecond">
                        If you would like to test yourself on your historical knowledge then head over
                        to the timeline page where you will be met with 3 timelines. Each one represents
                        a continent and each have a separate quiz for each century from the 14th century to the
                        present. Much the same as the map quizzes, once you have submitted your answers you will
                        be able to access your scores at the leaderboard page, eventually you will be able to compare your results with the
                        top 5 in the world.
                    </div>
                </div>
            </div>

        )
    }
}

export default HowItWorks