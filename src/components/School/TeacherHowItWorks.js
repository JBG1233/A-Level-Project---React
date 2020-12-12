import React from "react";
import '../Css/App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class TeacherHowItWorks extends React.Component{
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
                        Remember to create an account or login before completing the instructions
                        below as you will be unable to submit your answers and unable to access
                        your leaderboard stats. For the Map, decide what country you would like
                        to take a quiz for, press the marker hovering over the country. You should be
                        taken to a page with 7 questions, answer as many as you can and submit your answer.
                        After submitting your answers you will be able to see your updated leaderboard stats
                        at the leaderboard page, eventually you will be able to compare your results with the
                        top 5 in the world.
                    </div>
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
                </div>
            </div>

        )
    }
}

export default TeacherHowItWorks