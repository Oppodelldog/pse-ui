import React, {Component} from 'react';
import './App.css';
import Menu from '../Menu/Menu'
import Map from "../Map/Map";
import Receiver from "../../communication/Receiver";
import Sender from "../../communication/Sender";
import ProblemMapGenerator from 'problem-map-generator/dist/problem-map-generator.node.min';

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
        let map = new ProblemMapGenerator.Map({ 'cols': data.cols, 'rows': data.rows, 'width': 1000, 'height': 1000 });
        map.injectRandom(ProblemMapGenerator.Random);
        Sender.publishNewMapNodes(map.getNodes());
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
