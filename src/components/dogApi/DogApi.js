import React, { Component } from "react";

class DogApi extends Component {
  constructor(props) {
    super(props);
    this.state = { listDogAPI: [] };
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

          // let asd = JSON.parse(listDogAPI);
          console.log(listDogAPI);
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



  render() {
    return (
      <div className="list-dog-api">
        {/* {
          this.state.listDogAPI.map(key => (
            <select key={key}>
              {this.state.data.map(({ [key]: value }) => <option key={value}>{value}</option>)}
            </select>
          ))} */}

        {
          this.state.listDogAPI.map(((cloud, index) =>
            console.log(cloud)
            // <th key={`${cloud}`}>
            //   <div>teste</div>
            // </th>
            // < select key={`${cloud.cloud}${index}`}>

            // </select>
          ))
        }
      </div>
    );
  }
}

export default DogApi;
