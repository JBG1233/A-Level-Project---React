import { Map, Marker, TileLayer } from 'react-leaflet';
import React from 'react';

class WorldMap extends React.Component {

    UKClick = () => {this.props.history.push('/UK')}

    CanadaClick = () => {this.props.history.push('/Canada')}

    AustraliaClick = () => {this.props.history.push('/Australia')}

    BrazilClick = () => {this.props.history.push('/Brazil')}

    ChinaClick = () => {this.props.history.push('/China')}



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



export default WorldMap;
