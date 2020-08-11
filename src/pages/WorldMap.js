import { Map, Marker, TileLayer } from 'react-leaflet';
import React from 'react';
import {UKQuizTrue} from "../components/actions";
import {connect} from "react-redux";
import {loadUKQuestions} from "../components/Fetch";

class WorldMap extends React.Component {

    handleOnClick = () => {
        this.props.history.push('/UKQuiz')
    }

    componentDidMount() {
        this.props.loadUKQuestions()

    }

    render () {
        return (
                <Map center={[40, 100]} zoom={2}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}  onClick={() => this.handleOnClick()}>
                    </Marker>
                </Map>





        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {UKQuizTrue, loadUKQuestions}

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);
