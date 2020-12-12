import { Bar, Bubble } from "react-chartjs-2";
import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import Grid from "@material-ui/core/Grid";
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import StatCard from "../Extra/StatCard";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {connect} from "react-redux";
import {UpdateAlert, CloseAlert} from "../../redux/actions/alertActions";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
    }
    CloseAlert(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.props.CloseAlert()
    };

    render() {

            const sharedOptions = {
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                    display: false
                }
            };

            const gridOptions = {
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 7
                        }
                    }]
                }
            }

            const stackedGridOptions = {
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 7
                        }
                    }]
                }
            }

            const colors = [{
                backgroundColor: '#7986cb',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff'
            }];

            const labels = ['1', '2', '3', '4', '5', '6', '7'];

            const dataOne = {
                labels,
                datasets: [{
                    data: this.props.stats.qRightLast7,
                    ...colors[0],
                    borderWidth: 0,
                }]
            }

            const dataTwo = {
                labels,
                datasets: [{
                    data: this.props.stats.qWrongLast7,
                    borderWidth: 0,
                    ...colors[0],
                }]
            }

            const dataThree = {
                labels,
                datasets: [{
                    label: 'Percent',
                    type: 'line',
                    data: this.props.stats.percentageLast7,
                    borderWidth: 1,
                    fill: false,
                    ...colors[0],
                    yAxisID: 'y-axis-1'
                }]
            }

            const options = {
                responsive: true,
                tooltips: {
                    mode: 'label'
                },
                elements: {
                    line: {
                        fill: false
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        },
                        labels,
                    }],
                    yAxes: [{
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                        gridLines: {
                            display: false
                        },
                        labels: {
                            show: true
                        }
                    },
                    ]
                }
            };

            const height = 200;

            const data = [
            {
                type: 'bar',
                title: 'Questions Answered Right!',
                data: dataOne,
                height: height,
                options: {
                    ...sharedOptions,
                    ...gridOptions,
                    ...stackedGridOptions
                }
            },
            {
                type: 'bar',
                title: 'Questions Answered Wrong!',
                data: dataTwo,
                height: height,
                options: {
                    ...sharedOptions,
                    ...gridOptions,
                    ...stackedGridOptions
                }
            },
            {
                type: 'bar',
                title: 'Percentage scored!',
                data: dataThree,
                height: height,
                options: {
                    ...sharedOptions,
                    ...gridOptions,
                    ...options
                }
            }
        ];

        return (
            <div className="leaderboardPadding">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            type="fill"
                            title="Quiz's Taken"
                            value={this.props.stats.quizzesTaken}
                            icon={<CreateIcon/>}
                            color="#3f51b5"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            type="fill"
                            title="Questions Answered"
                            value={this.props.stats.answered}
                            icon={<QuestionAnswerIcon/>}
                            color="#9c27b0"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            type="fill"
                            title="Questions Answered Right"
                            value={this.props.stats.answeredRight}
                            icon={<CheckIcon/>}
                            color="#f44336"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            type="fill"
                            title="Questions Answered Wrong"
                            value={this.props.stats.answeredWrong}
                            icon={<ClearIcon/>}
                            color="#e5593f"
                        />
                    </Grid>
                    {data.map((chart, index) => (
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
                {this.props.alertOpen ?
                    <Snackbar open={this.props.alertOpen} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => this.CloseAlert()} >
                        <Alert elevation={6} variant="filled" autoHideDuration={2000} onClose={() => this.CloseAlert()} severity={this.props.severity}>
                            {this.props.message}
                        </Alert>
                    </Snackbar>
                    : null }

            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedInState.loggedIn,
        apiHost: state.serverDetails.apiHost,
        userDtos: state.loggedInState.userDtos,
        stats: state.loggedInState.leaderboardScore,
        severity: state.alert.severity,
        message: state.alert.message,
        alertOpen: state.alert.alertOpen,
    }
}

const mapDispatchToProps = {UpdateAlert, CloseAlert}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
