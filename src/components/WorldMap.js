import { Map, Marker, TileLayer } from 'react-leaflet';
import React from 'react';
import {connect} from "react-redux";
import {QuestionManagerTrue, UpdateQuestionState} from "../redux/actions";
import axios from "axios";

class WorldMap extends React.Component {

constructor(props) {
    super(props);
    }


changeComponent(groupId) {
    axios({
        method: 'GET',
        url: this.props.apiHost + '/rest/questions/' + groupId,
    })
        .then(response => {
            if (response.status === 200) {
                this.props.UpdateQuestionState(response.data, groupId)
                this.props.QuestionManagerTrue()
            }
        }).catch(error => {
    })
}

    render () {
        return (
            <Map center={[30, 30]} zoom={2.45} >

                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                    <Marker position={[51, -1]}  onClick={() => this.changeComponent('GBPGK')}/>

                    <Marker position={[55, -110]} onClick={() => this.changeComponent('CADGK')}/>

                    <Marker position={[-30, 135]} onClick={() => this.changeComponent('AUSGK')}/>

                    <Marker position={[-15, -50]} onClick={() => this.changeComponent('BRLGK')}/>

                    <Marker position={[30, 100]} onClick={() => this.changeComponent('CNYGK')}/>

                </Map>



        )
    }
}
const mapStateToProps = (state) => ({
    apiHost: state.serverDetails.apiHost
})

const mapDispatchToProps = {UpdateQuestionState, QuestionManagerTrue}

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap)