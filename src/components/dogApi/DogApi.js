import React, { Component } from "react";
import { Alert } from 'reactstrap';

class DogApi extends Component {
  constructor(props) {
    super(props);
    this.state = { listDogAPI: [], visibleAlert: false };
    console.log(this.getDogApiLIst());

    this.getDogApiLIst = this.getDogApiLIst.bind(this);
  }

  getDogApiLIst() {
    let dog_img = `akita`;
    let url_coversor = `https://dog.ceo/api/breeds/list/all`;
    // let url_coversor = `https://dog.ceo/api/breed/${dog_img}/images/random`;

    fetch(url_coversor)
      .then(res => {
        return res.json();
      })
      .then(json => {
        try {
          let listDogAPI = [json.message];
          this.setState({ listDogAPI });
        } catch (error) {
          console.log(error);
          alert(error);
        }
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });

  }

  onShowAlert = () => {
    this.setState({ visibleAlert: true }, () => {
      window.setTimeout(() => {
        this.setState({ visibleAlert: false })
      }, 2000)
    });
  }

  render() {

    let options = [];
    this.state.listDogAPI.map(((data) => {
      for (const key in data) {
        options.push(<option>{key}</option>)
      }
      return options;
    }))

    return (
      <div className="list-dog-api">

        <Alert color="primary" isOpen={this.state.visibleAlert}>
          This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
       </Alert>

        <select>{options}</select>
        <button  onClick={() => { this.onShowAlert() }}>TESTE</button>

      </div>
    );
  }
}

export default DogApi;
