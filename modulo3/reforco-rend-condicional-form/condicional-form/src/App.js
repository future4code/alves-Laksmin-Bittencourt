import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1.js';
import Etapa2 from './components/Etapa2.js';
import Etapa3 from './components/Etapa3.js';
import Final from './components/Final.js';

function App() {
  return (
    <div className="App">
      <Etapa1></Etapa1>
      <Etapa2></Etapa2>
      <Etapa3></Etapa3>
      <Final></Final>
      <buttom>Proxima Etapa</buttom>
    </div>
  );
}

export default App;
