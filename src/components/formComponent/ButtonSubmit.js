import React, { Component } from 'react';
import './FormComponent.css'

class ButtonSubmit extends Component {
    render() {
        return (
            <button type="submit" className="button-save btn btn-info">{this.props.value}</button>
        );
    }
}

export default ButtonSubmit;