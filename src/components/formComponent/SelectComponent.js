import React, { Component } from 'react';
import './FormComponent.css'

class SelectComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <select className="select custom-select" value={this.props.value} onChange={this.props.onChange} required>
                {this.props.option}
            </select>
        );
    }
}

export default SelectComponent;