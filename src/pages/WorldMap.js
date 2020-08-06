import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import React from 'react';

class WorldMap extends React.Component {
    render (){
        return (
            <Map center={[40, 100]} zoom={2}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
        <span>
          United Kingdom
        </span>
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

export default WorldMap;
