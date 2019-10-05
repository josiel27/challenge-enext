import React, { Component } from "react";
import { Alert, Container, Row } from 'reactstrap';
import "./DogApi.css";
import ImageDefaultDog from "../../assets/images/defaultDog.jpg";

class DogApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDogAPI: [],
      imgDogSelected: ImageDefaultDog,
      visibleAlertSuccess: false,
      visibleAlertFail: false,
      optionsState: 'defaultValue',
      dateTime: Date(),
      fontStyle: {
        color: "black",
        fontFamily: "'Arial', sans-serif",
      },
      listColorFonts: ['Blue', 'Red', 'Purple', "Green", 'Black'],
      listFonts: ['Acme', 'Anton', 'Josefin Sans', "Notable", 'Roboto']
    };


    // esse for carregara todos o elementos salvos no local storage
    let objectTest = new Object();
    for (const key in this.state) {
      objectTest[key] = JSON.parse(localStorage.getItem(`@challenge-enext/${key}`));
    }

    (this.state.dateTime) ? this.state = objectTest : console.log('Registro Limpo');

    this.getDogApiLIst = this.getDogApiLIst.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFontFamily = this.handleChangeFontFamily.bind(this);
    this.handleChangeFontColor = this.handleChangeFontColor.bind(this);
  }

  componentDidMount() {
    this.getDogApiLIst();//chama a funcao para carregar o select com as raças
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

  //salva as informacoes no local storage
  // window.location.reload(); //usado para recarregar pagina
  handleSubmit() {

    try {
      this.setState({ dateTime: new Date() });//salvando a data/hora do insercao no local storage
      for (const key in this.state) {
        localStorage.setItem(`@challenge-enext/${key}`, JSON.stringify(this.state[key]));
      }
      return this.render(<Alert className="alert" color="success"> ASDASD </Alert>)
    } catch (error) {

    }
  }

  //Mostrta o alert de sucesso
  onShowAlertSuccess = () => {
    this.setState({ visibleAlertSuccess: true }, () => {
      window.setTimeout(() => {
        this.setState({ visibleAlertSuccess: false })
      }, 2000)
    });
  }

  //Mostrta o alert de falha
  onShowAlertFail = () => {
    this.setState({ visibleAlertFail: true }, () => {
      window.setTimeout(() => {
        this.setState({ visibleAlertFail: false })
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
        <Alert className="alert" color="success" isOpen={this.state.visibleAlertSuccess}>
          Raça selcionada foi: &nbsp; {this.state.optionsState};
         
        </Alert>

        <Alert className="alert" color="danger" isOpen={this.state.visibleAlertFail}>
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
          <button className="button-save btn btn-info" onClick={() => { this.handleSubmit() }}>Salvar</button>
        </Container>


      </div >
    );
  }
}

export default DogApi;
