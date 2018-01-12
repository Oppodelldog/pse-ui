import React, {Component} from 'react';
import './Menu.css';
import SearchSelection from "../SearchSelection/SearchSelection";
import MapConfiguration from "../MapConfiguration/MapConfiguration";
import GithubRef from "../GithubRef/GithubRef";

export default class Menu extends Component {
    render() {
        return (
            <div id="menu" className="Menu">
                <h1 className="menu__header">Problem Search Explorer</h1>
                <SearchSelection/>
                <MapConfiguration cols={10} rows={10}/>
                <GithubRef/>
            </div>
        )
    }
}

