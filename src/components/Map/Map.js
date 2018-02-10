import React, {Component} from 'react';
import './Map.css';
import ProblemGraphVisualisation from 'problem-graph-visualisation'
import Receiver from "../../communication/Receiver";

export default class Map extends Component {
    constructor() {
        super();
        this.nodeSize = 8;
        this.nodes = [];
        this.selectedNodes = [];

        this.selectNode = this.selectNode.bind(this);
        this.handleNewMapNodes = this.handleNewMapNodes.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.selectSourceNode = this.selectSourceNode.bind(this);
        this.selectTargetNode = this.selectTargetNode.bind(this);
        this.getSelectedNodes = this.getSelectedNodes.bind(this);
        this.handleSolution = this.handleSolution.bind(this);

        Receiver.subscribeNewMapNodes(this.handleNewMapNodes);
        Receiver.subscribeSolution(this.handleSolution);
    }

    getSelectedNodes() {
        return this.selectedNodes;
    }

    selectNode(node) {
        if (this.selectedNodes.length === 2) {
            this.selectedNodes = [];
        }

        switch (this.selectedNodes.length) {
            case 0:
                this.selectedNodes.push(node);
                this.selectSourceNode(node);
                break;
            case 1:
                this.selectedNodes.push(node);
                this.selectTargetNode(node);
                break;
            default:
                break;
        }
    }

    handleClick(event) {
        const canvasRect = this.refs.canvas.getBoundingClientRect();
        const mx = event.clientX - canvasRect.left;
        const my = event.clientY - canvasRect.top;
        const r = this.nodeSize;
        for (let k in this.nodes) {
            const node = this.nodes[k];
            const rx = node.position.x;
            const ry = node.position.y;

            if (Math.sqrt((mx - rx) * (mx - rx) + (my - ry) * (my - ry)) < r) {
                this.selectNode(node);
                break;
            }
        }
    }

    selectSourceNode(node) {
        let level = new ProblemGraphVisualisation.Layer('source-node', {
            type: 'node',
            nodes: [node],
            nodeColor: '#05bef9',
            lineColor: '#385171',
            nodeSize: this.nodeSize,
            text: "A",
        });
        this.canvas.addLayer(level);
        this.canvas.update();
    }

    selectTargetNode(node) {
        let level = new ProblemGraphVisualisation.Layer('target-node', {
            type: 'node',
            nodes: [node],
            nodeColor: '#35f900',
            lineColor: '#385171',
            nodeSize: this.nodeSize,
            text: "Z",
        });
        this.canvas.addLayer(level);
        this.canvas.update();
    }

    handleNewMapNodes(msg, nodes) {
        this.nodes = nodes;
        let level = new ProblemGraphVisualisation.Layer('graph', {
            type: 'graph-node',
            nodes: this.nodes,
            nodeColor: '#e34f00',
            lineColor: '#385171',
            nodeSize: this.nodeSize
        });
        this.canvas.addLayer(level);
        this.canvas.update();
    }

    handleSolution(msg, solution) {
        let level = new ProblemGraphVisualisation.Layer('solution', {
            type: 'solution',
            nodes: solution,
            nodeColor: '#e3dc00',
            lineColor: '#f8f70e',
            nodeSize: 0
        });
        this.canvas.addLayer(level);
        this.canvas.update();
    }


    componentDidMount() {
        this.canvas = new ProblemGraphVisualisation.Canvas({
            element: document.getElementById('search-map'),
            height: 949,
            width: 665,
            background: "#223143"
        });
        this.canvas.rendererFactory.registerRenderer('node', ProblemGraphVisualisation.NodesRenderer);
        this.canvas.rendererFactory.registerRenderer('graph-node', ProblemGraphVisualisation.NodesRenderer);
        this.canvas.rendererFactory.registerRenderer('solution', ProblemGraphVisualisation.SolutionRenderer);
        this.canvas.element = this.refs.canvas;

        this.canvas.update();
    }

    render() {
        return (
            <canvas onClick={this.handleClick} id="search-map" ref="canvas"/>
        )
    }
}

