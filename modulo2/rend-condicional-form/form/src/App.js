import './App.css';
import styled from 'styled-components';
import DadosGerais from './Componentes/DadosGerais';
import CursoSuperior from './Componentes/CursoSuperior';
import SemCursoSuperior from './Componentes/SemCursoSuperior';
import Agradecimentos from './Componentes/Agradecimentos';

function App() {
  return (
    <div>
      <h1>Dados Gerais</h1>
      <input>
        <DadosGerais/>
      </input>
    </div>
  );
}

export default App;
