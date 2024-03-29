import React, { Component } from "react";
import { Alert, Container, Row, Form } from 'reactstrap';
import ImageDefaultDog from "../../assets/images/defaultDog.jpg";
import InfoDog from "../infoDog/InfoDog";
import "./DogApi.css";
import AuxButtons from "../auxButtons/AuxButtons";
import SelectComponent from "../formComponent/SelectComponent";
import InputComponent from "../formComponent/InputComponent";
import ButtonSubmit from "../formComponent/ButtonSubmit";

class DogApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      }
    };

    // esse for carregara todos o elementos salvos no local storage
    let objectTest = {};
    for (const key in this.state) {
      objectTest[key] = JSON.parse(localStorage.getItem(`@challenge-enext/${key}`));
    };

    //validação para verificar se o existe algum registro no local storage, se existir, seta o state com as informações
    (localStorage.getItem(`@challenge-enext/registered`)) ? this.state = objectTest : console.log('Registro Limpo');

    //O bind resolve um problema causado pelo contexto do JavaScript, ele provê uma maneira de garantir que mesmo desacoplando 
    //uma função de um objeto o comportamento dele continue o mesmo, garantindo assim uma integridade do comportamento da função. 
    this.handleChangeBreed = this.handleChangeBreed.bind(this);
    this.handleChangeFontFamily = this.handleChangeFontFamily.bind(this);
    this.handleChangeFontColor = this.handleChangeFontColor.bind(this);
    this.handleChangeNameDog = this.handleChangeNameDog.bind(this);
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

  //Preenche o select com as cores de fonts 
  getOptionsListColorFonts() {
    let listColorFonts = [];
    listColorFonts.push(<option key='defaultValue' value=''>Selecione uma cor para o texto</option>)
    this.state.listColorFonts.forEach(element => {
      listColorFonts.push(<option key={element} value={element}>{element}</option>)
    });
    return listColorFonts;
  };

  //
  //RENDER REACT
  //
  render() {

    return (//retorno do "html" para apresentar no App.js
      <div>
        <AuxButtons /> {/* Botoes auxiliares para recarregar pagina e apagar localstorage */}

        <Alert className="alert" color={this.state.alertOptions.color} isOpen={this.state.alertOptions.visibleAlert}>
          {this.state.alertOptions.text}
        </Alert> {/* Component para exibir a mensagem de alert sucesso ou falha */}

        <Container>
          <InfoDog params={this.state} /> {/* Component que tras as imagem e as informações salvas no localstorage */}

          <Form onSubmit={(e) => { this.handleSubmit(e) }}> {/* Form com os insputs para novo registro */}
            <Row>{/* Select raça */}
              <SelectComponent val={this.state.breedSelected} change={this.handleChangeBreed} option={'breeds'} params={this.state} />
            </Row>
            <Row>{/* Input nome dog  */}
              <InputComponent val={this.state.nameDog} change={this.handleChangeNameDog} />
            </Row>
            <Row>{/* Select fonte  */}
              <SelectComponent val={this.state.fontStyle.fontFamily} change={this.handleChangeFontFamily} option={'fonts'} params={this.state} />
            </Row>
            <Row>{/* Select cor */}
              <SelectComponent val={this.state.fontStyle.color} change={this.handleChangeFontColor} option={'colors'} params={this.state} />
            </Row>
            <Row>
              <ButtonSubmit value="Salvar" />
            </Row>
          </Form>
        </Container>
      </div >
    );
  }
}

export default DogApi;

