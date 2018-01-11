import React, {Component} from 'react';
import './GithubRef.css';

class GithubRef extends Component {
    render() {
        return (
            <div className="menu__section section">
                <a href="https://github.com/marcbreitung/problem-search-explorer" rel="noreferrer noopener" target="_blank" className="link">
                    <i aria-hidden="true" className="fa fa-github fa-fw"/>
                    Problem Search Explorer
                </a>
            </div>
        )
    }
}

export default GithubRef;
