import React, { Component } from 'react';
import "./AuxButtons.css";

class AuxButtons extends Component {

    //usado para recarregar pagina
    reloadPage = () => {
        window.location.reload()
    };

    //usado para limpar o localStorage
    deleteLocalStorage = () => {
        localStorage.clear(); 
        window.location.reload();
    };

    render() {
        return ( //COMPONETES CRIADOS PARA AUXILIAR NO CARREGAMENTO DA PAGINA E PARA APAGAR O LOCAL STORAGE
            <div className="buttons-config">
                <button className="btn btn-secondary ml-1 mt-1 col-12" onClick={() => { this.reloadPage() }}>Reload Page</button>
                <button className="btn btn-secondary ml-1 mt-1 col-12" onClick={() => { this.deleteLocalStorage() }}>Delete Local Storage</button>
            </div>
        );
    }

}

export default AuxButtons;