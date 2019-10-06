import React, { Component } from 'react';
import './FormComponent.css'

class InputComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input
                className="input-name form-control"
                value={this.props.value}
                onChange={this.props.onChange}
                placeholder="Digite o nome do cachorro"
                required>
            </input>

        );
    }
}

export default InputComponent;