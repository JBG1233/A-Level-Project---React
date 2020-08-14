import { Map, Marker, TileLayer } from 'react-leaflet';
import React from 'react';
import {UKQuizTrue} from "../components/actions";
import {connect} from "react-redux";

class WorldMap extends React.Component {

    UKClick = () => {this.props.history.push('/UKQuiz')}

    render () {
        return (
                <Map center={[40, 100]} zoom={2}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51, -1]}  onClick={() => this.UKClick()}/>

                    <Marker position={[55, -110]}/>

                    <Marker position={[-30, 135]}/>

                    <Marker position={[-15, -50]}/>

                    <Marker position={[30, 100]}/>

                </Map>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {UKQuizTrue}

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);
