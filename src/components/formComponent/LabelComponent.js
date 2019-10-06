import React, { Component } from 'react';

class LabelComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <label style={this.props.style}>{this.props.value}</label>
        )
    }
}

export default LabelComponent;