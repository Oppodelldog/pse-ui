import React, {Component} from 'react';
import './Map.css';
import ProblemGraphVisualisation from 'problem-graph-visualisation'
import Receiver from "../../communication/Receiver";

export default class Map extends Component {
    constructor() {
        super();

        this.handleNewMapNodes = this.handleNewMapNodes.bind(this);
        Receiver.subscribeNewMapNodes(this.handleNewMapNodes);
    }

    handleNewMapNodes(msg, nodes) {

        let level = new ProblemGraphVisualisation.Level('graph', {
            type: 'node',
            nodes: nodes,
            nodeColor: '#e34f00',
            lineColor: '#385171'
        });
        this.canvas.addLevel(level);
        this.canvas.update();
    }

    componentDidMount() {
        this.canvas = new ProblemGraphVisualisation.Canvas({
            element: document.getElementById('search-map'),
            height: 949,
            width: 665,
            background: "#223143"
        });
        this.canvas.rendererFabric.registerRenderer('node', ProblemGraphVisualisation.NodesRenderer);

        this.canvas.element = this.refs.canvas;

        this.canvas.update();
    }

    render() {
        return (
            <canvas id="search-map" ref="canvas"/>
        )
    }
}

