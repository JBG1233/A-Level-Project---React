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
import mockDashboard from './mock/dashboard';



const Leaderboard = () => {

    return (
        <Wrapper>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        type="fill"
                        title="Quiz's Taken"
                        value={103}
                        icon={<CreateIcon/>}
                        color="#3f51b5"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        type="fill"
                        title="Questions Answered"
                        value={230}
                        icon={<QuestionAnswerIcon/>}
                        color="#9c27b0"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        type="fill"
                        title="Questions Answered Right"
                        value={323}
                        icon={<CheckIcon/>}
                        color="#f44336"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        type="fill"
                        title="Questions Answered Wrong"
                        value={870}
                        icon={<ClearIcon/>}
                        color="#e5593f"
                    />
                </Grid>
                {mockDashboard.map((chart, index) => (
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
};
export default Leaderboard;
