import { Map, Marker, TileLayer } from 'react-leaflet';
import React from 'react';
import {UKQuizTrue} from "../components/actions";
import {connect} from "react-redux";
import UKQuiz from "./UKQuiz";

class WorldMap extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        UKQuiz: false,
    }
}
    handleOnClick = () => {
        this.setState({UKQuiz: true});
        this.props.UKQuizTrue()
    }
    render () {
        if (this.state.UKQuiz) {
            return <UKQuiz/>
        }        return (
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

const mapDispatchToProps = {UKQuizTrue}

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);
