import React, { Component } from 'react';
import LabelComponent from '../formComponent/LabelComponent';
import './InfoDog.css';

class InfoDog extends Component {
    constructor(props) {
        super(props);
        this.state = props.params;
    }

    //pega a data atual para adiciona na insercao do usuario
    getFormattedDate(dateParams) {
        let day = ("00" + dateParams.getDate()).slice(-2);
        let month = ("00" + (dateParams.getMonth() + 1)).slice(-2);
        let year = ("0000" + dateParams.getFullYear()).slice(-4);
        return day + '/' + month + '/' + year;
    }

    //pega a data atual para adiciona na insercao do usuario
    getgetFormattedHours(hoursParams) {
        let hours = ("00" + hoursParams.getHours()).slice(-2);
        let minutes = ("00" + hoursParams.getMinutes()).slice(-2);
        return hours + ':' + minutes;
    }

    render() {
        let insertionDate = new Date(this.props.params.dateTime),
            formattedDate = this.getFormattedDate(insertionDate),
            formattedHour = this.getgetFormattedHours(insertionDate);

        return (
            <div className="div-img-label" >
                {/* AQUI ELE SÓ PERMITE MOSTRAR O ELEMENTO SE ESTIVER REGISTRADO */}
                {this.props.params.registered ?
                    <div className="label-name">
                        <LabelComponent style={this.props.params.fontStyle} value={`Nome: ${this.props.params.nameDog}`}/>
                        <LabelComponent style={this.props.params.fontStyle} value={`Raça: ${this.props.params.breedSelected}`}/>
                        <LabelComponent style={this.props.params.fontStyle} value={`Hora: ${formattedHour}`}/>
                        <LabelComponent style={this.props.params.fontStyle} value={`Data: ${formattedDate}`}/>
                    </div>
                    : null}
                <img className="dog-img" src={this.props.params.imgDogSelected} alt="A cool dog" />
            </div>
        );
    }
}

export default InfoDog;