import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import laks from './imagens/laks.jpg'; 
import amorsaude from './imagens/amorsaude.jpg'; 
import email from './imagens/email.jpg'; 
import end from './imagens/end.png'; 
import seta from './imagens/seta.png'; 
import labenu from './imagens/labenu.png'; 

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={laks} 
          nome="Lakshmi M. Bittencourt" 
          descricao="Oi, meu nome é Lakshmi. Tenho 24 anos e sou gaúcha. Atualmente sou estudante da Labenu, cursando o 2° modulo do curso integral FullStack, estou na turma Alves e sem dúvidas já sou outra pessoa!"
        />
        
        <ImagemButton 
          imagem={seta} 
          texto="Ver mais"
        />

      </div> 

      <div className="littlecard-container">
        <CardPequeno
          imagem={email} 
          nome="E-mail:" 
          descricao="Lakshmi96@hotmail.com"
        />
        </div>

        <div className="littlecard-container">
        <CardPequeno
          imagem={end} 
          nome="Endereço" 
          descricao="Rua Geraldão de Rivera, N°666, bairro capirotinho."
        />
        </div>

        <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={labenu} 
          nome="Labenu" 
          descricao="Estudante de programação. 2° módulo do curso FullStack" 
        />
        
        <CardGrande 
          imagem={amorsaude} 
          nome="Clinica AmorSaúde" 
          descricao="Líder da área médica" 
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
