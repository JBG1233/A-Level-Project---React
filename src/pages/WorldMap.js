import { Map, Marker, TileLayer } from 'react-leaflet';
import React from 'react';
import {UKQuizTrue} from "../components/actions";
import {connect} from "react-redux";

class WorldMap extends React.Component {

    UKClick = () => {this.props.history.push('/UKQuiz')}

    CanadaClick = () => {this.props.history.push('/CanadaQuiz')}

    AustraliaClick = () => {this.props.history.push('/AustraliaQuiz')}

    BrazilClick = () => {this.props.history.push('/BrazilQuiz')}

    ChinaClick = () => {this.props.history.push('/ChinaQuiz')}



    render () {
        return (
                <Map center={[40, 100]} zoom={2}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51, -1]}  onClick={() => this.UKClick()}/>

                    <Marker position={[55, -110]} onClick={() => this.CanadaClick()} />

                    <Marker position={[-30, 135]} onClick={() => this.AustraliaClick()}/>

                    <Marker position={[-15, -50]} onClick={() => this.BrazilClick()}/>

                    <Marker position={[30, 100]} onClick={() => this.ChinaClick()}/>

                </Map>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {UKQuizTrue}

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);
