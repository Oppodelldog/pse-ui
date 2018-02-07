import React, {Component} from 'react';
import './App.css';
import Menu from '../Menu/Menu'
import Map from "../Map/Map";
import Receiver from "../../communication/Receiver";
import Sender from "../../communication/Sender";
import ProblemMapGenerator from 'problem-map-generator/dist/problem-map-generator.node.min';
import ProblemSearch from 'problem-search'

export default class App extends Component {
    constructor() {
        super();

        this.buildMap = this.buildMap.bind(this);
        this.startSearch = this.startSearch.bind(this);

        Receiver.subscribeBuildMap(this.buildMap);
        Receiver.subscribeSearch(this.startSearch);
    }

    startSearch(msg, data) {
        const selectedNodes = this.refs.map.getSelectedNodes();
        if (selectedNodes.length !== 2) {
            alert("You must select 2 nodes")
        }

        let graph = new ProblemSearch.Graph();
        graph.addNodes(this.nodes);

        const initialState = new ProblemSearch.State(selectedNodes[0].id);
        const goal = new ProblemSearch.State(selectedNodes[1].id);
        const problem = new ProblemSearch.Problem(graph, initialState, goal);

        const breadthFirstSearch = new ProblemSearch.BreadthFirstSearch();
        const result = breadthFirstSearch.search(problem);
        const solution = result.solutionGraph();

        Sender.publishSolution(solution);

    }

    buildMap(msg, data) {
        let map = new ProblemMapGenerator.Map({ 'cols': data.cols, 'rows': data.rows, 'width': 1000, 'height': 1000 });
        map.injectRandom(ProblemMapGenerator.Random);
        this.nodes = map.getNodes();
        Sender.publishNewMapNodes(this.nodes);
    }

    render() {
        return (
            <div className="App">
                <Menu/>
                <div id="map" className="Map">
                    <Map ref="map"/>
                </div>
            </div>
        );
    }
}
