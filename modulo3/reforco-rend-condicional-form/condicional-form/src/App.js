import React, { useState } from 'react';
import './App.css';
import Etapa1 from './components/Etapa1.js';
import Etapa2 from './components/Etapa2.js';
import Etapa3 from './components/Etapa3.js';
import Final from './components/Final.js';

function App() {

  const [etapa, setEtapa] = useState(1)

  const renderizaEtapa = () => {
    switch(etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        alert("Ops!")
        break
    }
  }

  const onClickIrParaProxEtapa = () => {
    setEtapa(etapa + 1)
  }

  

  return (
    <div className="App">
      {renderizaEtapa()}
      <buttom onClick={onClickIrParaProxEtapa} >Proxima Etapa</buttom>

    </div>
  );
}

export default App;
