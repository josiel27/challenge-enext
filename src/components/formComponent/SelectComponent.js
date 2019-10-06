import React, { Component } from 'react';
import './FormComponent.css'

class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDogAPI: [],
            listColorFonts: ['Blue', 'Red', 'Purple', "Green", 'Black'],
            listFonts: ['Acme', 'Anton', 'Josefin Sans', "Notable", 'Roboto']
        };
    }

    //É invocado imediatamente após um componente ser montado
    componentDidMount() {
        this.getDogApiLIst();//chama a funcao para carregar o select com as raças
    }

    //Recebe a lista de raças da api
    getDogApiLIst() {
        let url_coversor = `https://dog.ceo/api/breeds/list/all`;
        fetch(url_coversor).then(res => { return res.json(); })
            .then(json => {
                let listDogAPI = [json.message];
                this.setState({ listDogAPI });
            }).catch(error => { this.onShowAlert('danger', `Erro: ${error}`); });
    }

    //Preenche o select com as racas dos cachorros da API
    getOptionsListBreeds() {
        let listBreeds = [];
        this.state.listDogAPI.map(((data) => {
            listBreeds.push(<option key='defaultValue' value=''>Selecione uma raça</option>)
            for (const key in data) {
                listBreeds.push(<option key={key} value={key}>{key}</option>)
            }
            return listBreeds;
        }))
        return listBreeds;
    };

    //Preenche o select com as fonts 
    getOptionsListFonts() {
        let listFontsSelect = [];
        listFontsSelect.push(<option key='defaultValue' value=''>Selecione uma fonte de texto</option>)
        this.state.listFonts.forEach(element => {
            listFontsSelect.push(<option key={element} value={element}>{element}</option>)
        });
        return listFontsSelect;
    };

    //Preenche o select com as cores de fonts 
    getOptionsListColorFonts() {
        let listColorFonts = [];
        listColorFonts.push(<option key='defaultValue' value=''>Selecione uma cor para o texto</option>)
        this.state.listColorFonts.forEach(element => {
            listColorFonts.push(<option key={element} value={element}>{element}</option>)
        });
        return listColorFonts;
    };


    //Seta no state a raça selecionada
    handleChangeBreed(event) {
        this.getImgDogApi(event.target.value);
        this.setState({ breedSelected: event.target.value })
    }

    //Seta no state a fontFamily selecionada
    handleChangeFontFamily(event) {
        this.setState({ fontStyle: { fontFamily: event.target.value, color: this.state.fontStyle.color } })
    }

    //Seta no state a cor da font selecionada
    handleChangeFontColor(event) {
        this.setState({ fontStyle: { fontFamily: this.state.fontStyle.fontFamily, color: event.target.value } })
    }

    render() {
        return (
            <select className="select custom-select" value={this.props.val} onChange={this.props.change} required>
                {this.props.option === "breeds" ? this.getOptionsListBreeds() : null}
                {this.props.option === "fonts" ? this.getOptionsListFonts() : null}
                {this.props.option === "colors" ? this.getOptionsListColorFonts() : null}

            </select>
        );
    }
}

export default SelectComponent;