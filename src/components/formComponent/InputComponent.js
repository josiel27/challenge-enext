import React, { Component } from 'react';
import './FormComponent.css'

class InputComponent extends Component {
    render() {
        return (
            <input
                className="input-name form-control"
                value={this.props.val}
                onChange={this.props.change}
                placeholder="Digite o nome do cachorro"
                required>
            </input>

        );
    }
}

export default InputComponent;