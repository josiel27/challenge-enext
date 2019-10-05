import React, { Component } from "react";
import { Alert, Container, Row, Col } from 'reactstrap';
import "./DogApi.css";
import ImageDefaultDog from "../../assets/images/defaultDog.jpg";

class DogApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDogAPI: [],
      imgDogSelected: ImageDefaultDog,
      visibleAlert: false,
      optionsState: 'defaultValue',
      fontStyle: {
        color: "black",
        fontFamily: "'Arial', sans-serif",
      },
      listColorFonts: ['Blue', 'Red', 'Purple', "Green", 'Black'],
      listFonts: ['Acme', 'Anton', 'Josefin Sans', "Notable", 'Roboto']
    };



    this.getDogApiLIst = this.getDogApiLIst.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFontFamily = this.handleChangeFontFamily.bind(this);
    this.handleChangeFontColor = this.handleChangeFontColor.bind(this);
  }

  componentDidMount() {
    this.getDogApiLIst();
  }

  //Recebe a a imagem randomica da raça do cachorro selecionado
  getImgDogApi(dogSelected) {
    let url_image = `https://dog.ceo/api/breed/${dogSelected}/images/random`;
    fetch(url_image).then(res => { return res.json(); })
      .then(json => {
        try {
          this.setState({ imgDogSelected: json.message })
        } catch (error) { console.log(error); alert(error); }
      }).catch(error => { console.log(error); alert(error); });
  }

  //Recebe a lista de raças da api
  getDogApiLIst() {
    let url_coversor = `https://dog.ceo/api/breeds/list/all`;
    fetch(url_coversor).then(res => { return res.json(); })
      .then(json => {
        try {
          let listDogAPI = [json.message];
          this.setState({ listDogAPI });
        } catch (error) { console.log(error); alert(error); }
      }).catch(error => { console.log(error); alert(error); });
  }

  //Seta no state a raça selecionada
  handleChange(event) {
    this.getImgDogApi(event.target.value);
    this.setState({ optionsState: event.target.value })
  }

  //Seta no state a fontFamily selecionada
  handleChangeFontFamily(event) {
    this.setState({ fontStyle: { fontFamily: event.target.value, color: this.state.fontStyle.color } })
  }

  //Seta no state a cor da font selecionada
  handleChangeFontColor(event) {
    this.setState({ fontStyle: { fontFamily: this.state.fontStyle.fontFamily, color: event.target.value } })
  }

  //Mostrta o alert de sucesso
  onShowAlert = () => {
    this.setState({ visibleAlert: true }, () => {
      window.setTimeout(() => {
        this.setState({ visibleAlert: false })
      }, 2000)
    });
  }

  render() {

    let options = [], listFontsSelect = [], listColorFonts = [];

    //Preenche o select com as racas dos cachorros da API
    this.state.listDogAPI.map(((data, index) => {
      options.push(<option key='defaultValue' value='defaultValue'>Selecione uma raça</option>)
      for (const key in data) {
        options.push(<option key={key} value={key}>{key}</option>)
      }
      return options;
    }))

    //Preenche o select com as fonts 
    listFontsSelect.push(<option key='defaultValue' value='defaultValue'>Selecione uma font</option>)
    this.state.listFonts.forEach(element => {
      listFontsSelect.push(<option key={element} value={element}>{element}</option>)
    });

    //Preenche o select com as cores de fonts 
    listColorFonts.push(<option key='defaultValue' value='defaultValue'>Selecione uma cor</option>)
    this.state.listColorFonts.forEach(element => {
      listColorFonts.push(<option key={element} value={element}>{element}</option>)
    });



    return (


      <div className="list-dog-api" >
        <Alert className="alert" color="primary" isOpen={this.state.visibleAlert}>
          Raça selcionada foi: &nbsp;
          <a href={`https://www.google.com/search?q=${this.state.optionsState}`} className="alert-link" target="_blank">
            {this.state.optionsState}
          </a>
        </Alert>

        <Container>
          <Row>
            <img className="dog-img" src={this.state.imgDogSelected} alt="A cool dog" />
          </Row>
          <Row>
            <select
              className="select-breed custom-select"
              value={this.state.optionsState}
              onChange={this.handleChange}
            >
              {options}
            </select>
          </Row>
          <Row>
            <select
              className="select-font-family custom-select"
              value={this.state.fontStyle.fontFamily}
              onChange={this.handleChangeFontFamily}
            >
              {listFontsSelect}
            </select>
          </Row>
          <Row>
            <select
              className="select-font-color custom-select"
              value={this.state.fontStyle.color}
              onChange={this.handleChangeFontColor}
            >
              {listColorFonts}
            </select>
          </Row>
          <Row>
            <input className="input-name-dog form-control" style={this.state.fontStyle} placeholder="Digite o nome do cachorro"></input>
          </Row>
          <button className="button-save" onClick={() => { this.onShowAlert() }}>Salvar</button>
        </Container>


      </div >
    );
  }
}

export default DogApi;
