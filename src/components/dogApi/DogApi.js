import React, { Component } from "react";

class DogApi extends Component {
  constructor(props) {
    super(props);
    this.state = { listDogAPI: []};
    console.log(this.getDogApiLIst());

    this.getDogApiLIst = this.getDogApiLIst.bind(this);
  }

  getDogApiLIst() {
    let url_coversor = `https://dog.ceo/api/breeds/list/all`;

    fetch(url_coversor)
      .then(res => {
        return res.json();
      })
      .then(json => {
        try {
          console.log(json.message);
          let listDogAPI = json;
          this.setState({ listDogAPI });
        } catch (error) {
          console.log(json.error);
          alert(json.error);
        }
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div className="list-dog-api">
        {this.state.listDogAPI.map(home => <div>{home}</div>)}
      </div>
    );
  }
}

export default DogApi;
