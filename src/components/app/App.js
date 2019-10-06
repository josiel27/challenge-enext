import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DogApi from "../dogApi/DogApi"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogApi />
      </header>

    </div>
  );
}

export default App;