import { Bar, Bubble } from "react-chartjs-2";
import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import Grid from "@material-ui/core/Grid";
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import StatCard from "./StatCard";
import Wrapper from "./Wrapper";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import charts from './Dashboard';
import axios from "axios";



class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            qRight: 0,
            qWrong: 0,
            quizzesTaken: 0,
            answered: 0,

        }
    }

    getLeaderboardStatistics() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080' + '/rest/leaderboard',
            headers: {
                'Authorization': localStorage.getItem('accessToken')
            },
        })
            .then(response => {
                this.setState ({
                    qRight: response.data.answeredRight,
                    qWrong: response.data.answeredWrong,
                    quizzesTaken: response.data.quizzesTaken,
                    answered: response.data.answered,
                })
            })
    }

    componentDidMount() {
        if (localStorage.getItem('loggedIn') !== null) {
            this.getLeaderboardStatistics()
        } else {
            alert("Please Login to access your scores")
        }
    }

    render() {
        return (
            <Wrapper>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            type="fill"
                            title="Quiz's Taken"
                            value={this.state.quizzesTaken}
                            icon={<CreateIcon/>}
                            color="#3f51b5"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            type="fill"
                            title="Questions Answered"
                            value={this.state.answered}
                            icon={<QuestionAnswerIcon/>}
                            color="#9c27b0"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            type="fill"
                            title="Questions Answered Right"
                            value={this.state.qRight}
                            icon={<CheckIcon/>}
                            color="#f44336"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            type="fill"
                            title="Questions Answered Wrong"
                            value={this.state.qWrong}
                            icon={<ClearIcon/>}
                            color="#e5593f"
                        />
                    </Grid>
                    {charts.map((chart, index) => (
                        <Grid item xs={12} sm={12} md={4} key={index}>
                            <Card>
                                <CardHeader
                                    subheader={chart.title}
                                />
                                <CardContent>
                                    {chart.type === "bar" && (
                                        <Bar
                                            data={chart.data}
                                            height={chart.height}
                                            options={chart.options}
                                        />
                                    )}
                                    {chart.type === "bubble" && (
                                        <Bubble
                                            data={chart.data}
                                            height={chart.height}
                                            options={chart.options}
                                        />
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Wrapper>
        );
    }
}
export default Leaderboard;
