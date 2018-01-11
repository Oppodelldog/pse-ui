import React, {Component} from 'react';
import './Map.css';
import ProblemGraphVisualisation from 'problem-graph-visualisation'

class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.canvas = new ProblemGraphVisualisation.Canvas({
            element: document.getElementById('search-map'),
            height: 100,
            width: 100
        });
        this.canvas.rendererFabric.registerRenderer('node', ProblemGraphVisualisation.NodesRenderer);

        this.canvas.element = this.refs.canvas;

        let level = new ProblemGraphVisualisation.Level('level 01', {
            type: 'node',
            nodes: [
                { label: 'A', position: { x: 10, y: 50 }, childs: [{ position: { x: 90, y: 50 }, childs: [] }] },
                { label: 'B', position: { x: 90, y: 50 }, childs: [{ position: { x: 10, y: 50 }, childs: [] }] }
            ],
            nodeColor: '#e34f00',
            lineColor: '#385171'
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

export default Map;
