import React, { Component } from "react";

class ImgDog extends Component {
    constructor(props) {
        super(props);
    }

    getImgDogApi(dogSelected) {
        let url_image = `https://dog.ceo/api/breed/${dogSelected}/images/random`;

        fetch(url_image)
            .then(res => {
                return res.json();
            })
            .then(json => {
                try {
                    // this.setState({ imgDogSelected: json.message })
                    return json.message;
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
            <img className="dog-img" src={this.props.srcValue} alt="A cool dog" />
        );
    }
}

export default ImgDog;