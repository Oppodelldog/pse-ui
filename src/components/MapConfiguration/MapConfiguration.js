import React, {Component} from 'react';
import './MapConfiguration.css';

class MapConfiguration extends Component {
    render() {
        return (
            <div className="menu__section section">
                <h2 className="section__header">Map</h2>
                <div className="form__row">
                    <label className="form__label form__label--small">
                        Columns</label>
                    <input placeholder="Columns (e.g. 10)" step="1" min="1" max="50"
                           className="form__input form__input--small" type="number"/>
                </div>
                <div className="form__row"><label className="form__label form__label--small">Rows</label> <input
                    placeholder="Rows (e.g. 10)" step="1" min="1" max="50" className="form__input form__input--small"
                    type="number"/>
                </div>
                <div className="form__row">
                    <button className="form__input form__button">Build Map</button>
                </div>
            </div>
        )
    }
}

export default MapConfiguration;
