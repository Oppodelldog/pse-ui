import React, {Component} from 'react';
import './Map.css';

class Map extends Component {
    render() {
        return (
            <div id="map" className="Map">
                <canvas id="canvas" height="949" width="665"/>
            </div>
        )
    }
}

export default Map;
