import React, {Component} from 'react';
import './Map.css';
import ProblemGraphVisualisation from 'problem-graph-visualisation'

export default class Map extends Component {

    componentDidMount() {
        this.canvas = new ProblemGraphVisualisation.Canvas({
            element: document.getElementById('search-map'),
            height: 100,
            width: 100,
            background:"#223143"
        });
        this.canvas.rendererFabric.registerRenderer('node', ProblemGraphVisualisation.NodesRenderer);

        this.canvas.element = this.refs.canvas;

        let level = new ProblemGraphVisualisation.Level('level 01', {
            type: 'node',
            nodes: [
                { label: 'A', position: { x: 10, y: 50 }, childs: [{ position: { x: 90, y: 50 }, childs: [] }] },
                { label: 'B', position: { x: 90, y: 50 }, childs: [{ position: { x: 10, y: 50 }, childs: [] }] }
            ],
            nodeColor: '#f8f70e',
            lineColor: '#00e2c1'
        });

        this.canvas.addLevel(level);
        this.canvas.update();
    }

    render() {
        return (
            <canvas id="search-map" ref="canvas" width="100" height="100"/>
        )
    }
}

