import React, {Component} from 'react';
import './SearchSelection.css';
import Sender from "../../communication/Sender";
import PropTypes from "prop-types";

export default class SearchSelection extends Component {

    constructor(props) {
        super(props);


        this.options = [
            { value: "BreadthFirstSearch", name: "Breadth First Search" },
            { value: "UniformCostSearch", name: "Uniform Cost Search" },
            { value: "DepthFirstSearch", name: "Depth First Search" },
            { value: "DepthLimitedFirstSearch", name: "Depth Limited First Search" }
        ];

        this.state = { value: this.options[0].value };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleClick() {
        const actionData = {
            selectedAlgorithm: this.state.value
        };

        Sender.publishSearch(actionData)
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        let options = this.options.map((v, k) => {
            return <option key={k} value={v.value}>{v.name}</option>
        });

        return (
            <div className={"menu__section section"}>
                <h2 className="section__header">{this.props.header || "Search"}</h2>
                <label className="form__label">{this.props.label || "Search Strategy"}</label>
                <div className="form__row">
                    <select className="form__input menu__select"
                            value={this.state.value}
                            onChange={this.handleChange}
                    >
                        {options}
                    </select>
                </div>
                <div className="form__row">
                    <button className="form__input form__button" onClick={this.handleClick}>Search</button>
                </div>
            </div>
        )
    }
}

SearchSelection.propTypes = {
    label: PropTypes.string,
    header: PropTypes.string,
};