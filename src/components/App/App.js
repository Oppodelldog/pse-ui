import React, {Component} from 'react';
import './App.css';
import Menu from '../Menu/Menu'
import Map from "../Map/Map";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu/>
                <div id="map" className="Map">
                    <Map/>
                </div>

            </div>
        );
    }
}

export default App;
