import { Popup, Map, Marker, TileLayer } from 'react-leaflet';
import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {SearchResultsChange, UpdateQuestionState} from "../../redux/actions/questionsStateActions";
import {UpdateAlert, CloseAlert} from "../../redux/actions/alertActions";
import {withRouter} from "react-router";
import {compose} from "redux";

class WorldMap extends React.Component {

constructor(props) {
    super(props);
    }

    getResults (country) {
        axios({
            method: 'GET',
            url: this.props.apiHost + '/rest/questions/search/' + country,
        })
            .then(response => {
                if (response.status === 200) {
                    this.props.SearchResultsChange(response.data)
                    this.props.history.push('/results')
                }
            }).catch(error => {
        })
    }

    createQuiz() {
        if (this.props.role === "teacher") {
        } else {
            this.props.UpdateAlert("error", "You don't have the correct permissions to create a quiz!")
        }
    }

    render () {
        return (
            <Map center={[30, 30]} zoom={2.45} >

                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                    <Marker position={[51, -1]}>
                        <Popup>
                            <span className="viewQuiz" onClick={() => this.getResults('UK')}>
                                View quizzes!
                            </span>
                            <br/>
                            <br/>
                            <span className="viewQuiz" onClick={() => this.createQuiz()}>
                                  Create a quiz!
                            </span>
                        </Popup>
                    </Marker>

                    <Marker position={[55, -110]}>
                        <Popup>
                            <span className="viewQuiz" onClick={() => this.getResults('Canada')}>
                                View quizzes!
                            </span>
                            <br/>
                            <br/>
                            <span className="viewQuiz" onClick={() => this.createQuiz()}>
                                  Create a quiz!
                            </span>
                        </Popup>
                    </Marker>

                    <Marker position={[-30, 135]}>
                        <Popup>
                            <span className="viewQuiz" onClick={() => this.getResults('Australia')}>
                                View quizzes!
                            </span>
                            <br/>
                            <br/>
                            <span className="viewQuiz" onClick={() => this.createQuiz()}>
                                  Create a quiz!
                            </span>
                        </Popup>
                    </Marker>

                    <Marker position={[-15, -50]}>
                        <Popup>
                            <span className="viewQuiz" onClick={() => this.getResults('Brazil')}>
                                View quizzes!
                            </span>
                            <br/>
                            <br/>
                            <span className="viewQuiz" onClick={() => this.createQuiz()}>
                                  Create a quiz!
                            </span>
                        </Popup>
                    </Marker>

                    <Marker position={[30, 100]}>
                        <Popup>
                            <span className="viewQuiz" onClick={() => this.getResults('China')}>
                                View quizzes!
                            </span>
                            <br/>
                            <br/>
                            <span className="viewQuiz" onClick={() => this.createQuiz()}>
                                  Create a quiz!
                            </span>
                        </Popup>
                    </Marker>

                </Map>



        )
    }
}
const mapStateToProps = (state) => {
    return {
        apiHost: state.serverDetails.apiHost,
        role: state.sidebarItems.role,
        severity: state.alert.severity,
        userDtos: state.loggedInState.userDtos
    }
}

const mapDispatchToProps = {UpdateQuestionState, CloseAlert, UpdateAlert, SearchResultsChange}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(WorldMap)