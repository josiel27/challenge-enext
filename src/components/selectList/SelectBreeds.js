import React, { Component } from 'react';

class SelectBreeds extends Component {
    state = {
        posts: [
            { id: 1, title: 'Aprendendo React' },
            { id: 2, title: 'A RocketSeat é massa!' },
            { id: 3, title: 'Ainda não sei outro título' }
        ],
    };
    render() {
        return (
            <div>
                {
                    this.state.listDogAPI.map(((data) => {
                        let listBreeds = [];
                        listBreeds.push(<option key='defaultValue' value=''>Selecione uma raça</option>)
                        for (const key in data) {
                            listBreeds.push(<option key={key} value={key}>{key}</option>)
                        }
                        return listBreeds;
                    }))
                }
            </div>
        )
    }
}

export default SelectBreeds;
