import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import laks from './img/laks.jpeg';
import olho from './img/olho.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={laks.jpeg} 
          nome="Lakshmi" 
          descricao="Oi, eu sou a Lakshmi. Sou estudante da Labenu a uns 3 meses e estou muito feliz."
        />
        
        <ImagemButton 
          imagem={olho.png}
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        nome="E-mail:"
        email="lakshmi96@yahoo.com.br"
        nome2="Endereço:"
        endereço="R. Caminho Das Indias N°71, barra da lagoa."
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Desenvolvedora Jr. Front-End" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="AmorSaude" 
          descricao="Líder Da Area Médica" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
