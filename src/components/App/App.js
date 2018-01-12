import React, {Component} from 'react';
import './App.css';
import Menu from '../Menu/Menu'
import Map from "../Map/Map";
import Receiver from "../../communication/Receiver";

export default class App extends Component {
    constructor() {
        super();

        this.buildMap = this.buildMap.bind(this);
        this.startSearch = this.startSearch.bind(this);

        Receiver.subscribeBuildMap(this.buildMap);
        Receiver.subscribeSearch(this.startSearch);
    }

    startSearch(msg, data) {
        console.log(msg, data);
    }

    buildMap(msg, data) {
        console.log(msg, data);
    }

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
