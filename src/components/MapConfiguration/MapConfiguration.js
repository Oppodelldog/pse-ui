import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MapConfiguration.css';
import Sender from "../../communication/Sender";


export default class MapConfiguration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cols: 0,
            rows: 0,
        };

        if (typeof props.cols !== "undefined") {
            this.state.cols = props.cols;
        }
        if (typeof props.rows !== "undefined") {
            this.state.rows = props.rows;
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleRowsChange = this.handleRowsChange.bind(this);
        this.handleColsChange = this.handleColsChange.bind(this);
    }

    handleClick() {
        const actionData = {
            cols: this.state.cols,
            rows: this.state.rows,
        };

        Sender.publishBuildMap(actionData);
    }

    handleRowsChange(event) {
        this.setState({ rows: event.target.value });
    }

    handleColsChange(event) {
        this.setState({ cols: event.target.value });
    }

    render() {
        return (
            <div className="menu__section section">
                <h2 className="section__header">Map</h2>
                <div className="form__row">
                    <label className="form__label form__label--small">
                        Columns</label>
                    <input value={this.state.cols} onChange={this.handleColsChange} placeholder="Columns (e.g. 10)"
                           step="1" min="1" max="50"
                           className="form__input form__input--small" type="number"/>
                </div>
                <div className="form__row">
                    <label className="form__label form__label--small">Rows</label>
                    <input value={this.state.rows} onChange={this.handleRowsChange}
                           placeholder="Rows (e.g. 10)" step="1" min="1" max="50"
                           className="form__input form__input--small"
                           type="number"/>
                </div>
                <div className="form__row">
                    <button className="form__input form__button" onClick={this.handleClick}>Build Map</button>
                </div>
            </div>
        )
    }
}

MapConfiguration.propTypes = {
    cols: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
};