import React, { Component } from 'react';
import './FormComponent.css'

class ButtonSubmit extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button type="submit" className="button-save btn btn-info">{this.props.value}</button>
        );
    }
}

export default ButtonSubmit;