import React, { Component } from "react";
import { Alert, Container, Row } from 'reactstrap';
import "./DogApi.css";
import ImageDefaultDog from "../../assets/images/defaultDog.jpg";

class DogApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDogAPI: [],
      nameDog: "",
      imgDogSelected: ImageDefaultDog,
      alertOptions: {
        visibleAlert: false,
        text: '',
        color: 'info',
      },
      breedSelected: 'defaultValue',
      dateTime: Date(),
      registered: undefined,
      fontStyle: {
        color: "defaultValue",
        fontFamily: "defaultValue",
      },
      listColorFonts: ['Blue', 'Red', 'Purple', "Green", 'Black'],
      listFonts: ['Acme', 'Anton', 'Josefin Sans', "Notable", 'Roboto']
    };

    // esse for carregara todos o elementos salvos no local storage
    let objectTest = new Object();
    for (const key in this.state) {
      objectTest[key] = JSON.parse(localStorage.getItem(`@challenge-enext/${key}`));
    };

    //validação para verificar se o existe algum registro no local storage, se existir, seta o state com as informações
    (localStorage.getItem(`@challenge-enext/registered`)) ? this.state = objectTest : console.log('Registro Limpo');

    //O bind resolve um problema causado pelo contexto do JavaScript, ele provê uma maneira de garantir que mesmo desacoplando 
    //uma função de um objeto o comportamento dele continue o mesmo, garantindo assim uma integridade do comportamento da função. 
    this.getDogApiLIst = this.getDogApiLIst.bind(this);
    this.handleChangeBreed = this.handleChangeBreed.bind(this);
    this.handleChangeFontFamily = this.handleChangeFontFamily.bind(this);
    this.handleChangeFontColor = this.handleChangeFontColor.bind(this);
    this.handleChangeNameDog = this.handleChangeNameDog.bind(this);
  }

  //É invocado imediatamente após um componente ser montado
  componentDidMount() {
    this.getDogApiLIst();//chama a funcao para carregar o select com as raças
  }

  //Recebe a a imagem randomica da raça do cachorro selecionado
  getImgDogApi(dogSelected) {
    if (dogSelected) {

      let url_image = `https://dog.ceo/api/breed/${dogSelected}/images/random`;
      fetch(url_image).then(res => { return res.json(); })
        .then(json => {
          this.setState({ imgDogSelected: json.message }); //seta a image retornada no state
        }).catch(error => { this.onShowAlert('danger', `Erro: ${error}`); });
    }
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

  //Seta no state a cor da font selecionada
  handleChangeNameDog(event) {
    this.setState({ nameDog: event.target.value })
  }

  //salva as informacoes no local storage
  handleSubmit = (e) => {

    e.preventDefault();// Prevent submit from reloading the page

    try {
      //salvando a data/hora do insercao no local storage.. OBS: passando o callback para garantir que o setState seja realiza primeiro.
      this.setState({ dateTime: new Date(), registered: true, nameDog: this.state.nameDog }, () => {
        for (const key in this.state) {
          localStorage.setItem(`@challenge-enext/${key}`, JSON.stringify(this.state[key]));
        }
        this.onShowAlert('success', 'Registrado com sucesso!');
      });
    } catch (error) { this.onShowAlert('danger', `Erro: ${error}`) };
  }

  //Mostrta o alert de sucesso durante 2seg, depois seta aos valores default
  onShowAlert = (color, text) => {
    this.setState({ alertOptions: { visibleAlert: true, text, color } }, () => {
      window.setTimeout(() => {
        this.setState({ alertOptions: { visibleAlert: false, text: '', color: 'info' } })
      }, 2000)
    });
  }

  //pega a data atual para adiciona na insercao do usuario
  getFormattedDate(dateParams) {
    let day = ("00" + dateParams.getDate()).slice(-2);
    let month = ("00" + (dateParams.getMonth() + 1)).slice(-2);
    let year = ("0000" + dateParams.getFullYear()).slice(-4);
    let date = day + '/' + month + '/' + year;
    return date;
  }

  //pega a data atual para adiciona na insercao do usuario
  getgetFormattedHours(hoursParams) {
    let hours = ("00" + hoursParams.getHours()).slice(-2);
    let minutes = ("00" + hoursParams.getMinutes()).slice(-2);
    return hours + ':' + minutes;
  }


  //usado para recarregar pagina
  reloadPage = () => { window.location.reload(); }

  //usado para limpar o localStorage
  deleteLocalStorage = () => { localStorage.clear(); window.location.reload(); }

  //
  //RENDER REACT
  //
  render() {
    let options = [],
      listFontsSelect = [],
      listColorFonts = [],
      formattedDate,
      formattedHour,
      insertionDate = new Date(this.state.dateTime);

    formattedDate = this.getFormattedDate(insertionDate);
    formattedHour = this.getgetFormattedHours(insertionDate);

    //Preenche o select com as racas dos cachorros da API
    this.state.listDogAPI.map(((data) => {
      options.push(<option key='defaultValue' value=''>Selecione uma raça</option>)
      // options.push(<option key='defaultValue' value='defaultValue' disabled>Selecione uma raça</option>)
      for (const key in data) {
        options.push(<option key={key} value={key}>{key}</option>)
      }
      return options;
    }))

    //Preenche o select com as fonts 
    listFontsSelect.push(<option key='defaultValue' value=''>Selecione uma fonte de texto</option>)
    this.state.listFonts.forEach(element => {
      listFontsSelect.push(<option key={element} value={element}>{element}</option>)
    });

    //Preenche o select com as cores de fonts 
    listColorFonts.push(<option key='defaultValue' value=''>Selecione uma cor para o texto</option>)
    this.state.listColorFonts.forEach(element => {
      listColorFonts.push(<option key={element} value={element}>{element}</option>)
    });

    return (//retorno do "html" para apresentar no App.js

      <div className="list-dog-api" >
        <div className="buttons-config">
          <button className="btn btn-secondary ml-1 mt-1 col-12" onClick={() => { this.reloadPage() }}>Reload Page</button>
          <button className="btn btn-secondary ml-1 mt-1 col-12" onClick={() => { this.deleteLocalStorage() }}>Delete Local Storage</button>
        </div>

        <Alert className="alert" color={this.state.alertOptions.color} isOpen={this.state.alertOptions.visibleAlert}>
          {this.state.alertOptions.text}
        </Alert>

        <Container>

          <div className="div-img-label" >
            {/* AQUI ELE SÓ PERMITE MOSTRAR O ELEMENTO SE ESTIVER REGISTRADO */}
            {this.state.registered ?
              <div className="label-name">
                <label style={this.state.fontStyle} >Nome: {this.state.nameDog}</label>
                <label style={this.state.fontStyle} >Raça: {this.state.breedSelected} </label>
                <label style={this.state.fontStyle} >Hora: {formattedHour} </label>
                <label style={this.state.fontStyle}>Data: {formattedDate} </label>
              </div>
              : null};
            <img className="dog-img" src={this.state.imgDogSelected} alt="A cool dog" />
          </div>

          <form onSubmit={(e) => { this.handleSubmit(e) }}>
            <Row>
              <select className="select-breed custom-select" value={this.state.breedSelected} onChange={this.handleChangeBreed} required>
                {options}

              </select>
            </Row>
            <Row>
              <input className="input-name-dog form-control" value={this.state.nameDog} onChange={this.handleChangeNameDog} placeholder="Digite o nome do cachorro" required></input>
            </Row>
            <Row>
              <select className="select-font-family custom-select" value={this.state.fontStyle.fontFamily} onChange={this.handleChangeFontFamily} required>
                {listFontsSelect}
              </select>
            </Row>
            <Row>
              <select className="select-font-color custom-select" value={this.state.fontStyle.color} onChange={this.handleChangeFontColor} required>
                {listColorFonts}
              </select>
            </Row>
            <Row>
              <button type="submit" className="button-save btn btn-info">Salvar</button>
            </Row>
          </form>
        </Container>
      </div >
    );
  }
}

export default DogApi;
