import React, {Component} from 'react';
import './SearchSelection.css';

class SearchSelection extends Component {
    render() {
        return (
            <div className={"menu__section section"}>
                <h2 className="section__header">Search</h2>
                <label className="form__label">Search Strategy</label>
                <div className="form__row">
                    <select className="form__input menu__select">
                    <option value="BreadthFirstSearch">Breadth First Search</option>
                    <option value="UniformCostSearch">Uniform Cost Search</option>
                    <option  value="DepthFirstSearch">Depth First Search</option>
                    <option value="DepthLimitedFirstSearch">Depth Limited First Search</option>
                </select>
                </div>
                <div className="form__row">
                    <button class="form__input form__button">Search</button>
                </div>
            </div>
        )
    }
}

export default SearchSelection;
