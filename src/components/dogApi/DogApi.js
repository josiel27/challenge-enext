import React, { Component } from "react";
import { Alert, Container, Row } from 'reactstrap';
import "./DogApi.css";

class DogApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDogAPI: [],
      imgDogSelected: "http://www.citydogshare.org/assets/default_dog-f1f5e5aa031ad0a956a936dc4fb4bde95c712f2ad1f99e883b5bc58d22aec668.jpg",
      visibleAlert: false,
      optionsState: 'defaultValue',
      fontStyle: {
        color: "blue",
        fontFamily: "'Anton', sans-serif"
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
    this.state.listFonts.forEach(element => {
      listFontsSelect.push(<option key={element} value={element}>{element}</option>)
    });

    //Preenche o select com as cores de fonts 
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
            <select className="select-breed" value={this.state.optionsState} onChange={this.handleChange} >{options}</select>
          </Row>
          <Row>
            <select className="select-font-family" value={this.state.fontStyle.fontFamily} onChange={this.handleChangeFontFamily} >{listFontsSelect}</select>
          </Row>
          <Row>
            <select className="select-font-family" value={this.state.fontStyle.color} onChange={this.handleChangeFontColor} >{listColorFonts}</select>
          </Row>
          <Row>
            <input className="input-name-dog" style={this.state.fontStyle}></input>
          </Row>
          <button className="button-save" onClick={() => { this.onShowAlert() }}>TESTE</button>
        </Container>


      </div >
    );
  }
}

export default DogApi;
