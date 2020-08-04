import React from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/img/logo.svg'
import landingImg from '../../assets/img/landing.svg'

import studyIcon from '../../assets/img/icons/study.svg'
import giveClassesIcon from '../../assets/img/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/img/icons/purple-heart.svg'

import './styles.css'


function Landing() {
  
  return (
    <div id="page-landing">
      <div id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="Logo da Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Imagem de fundo da plataforma, mostrando pessoal conectadas aos smartphones e vendo os videos do proffy" 
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar Link"/>
            Estudar
          </Link>
          
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar Link"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>

      </div>
    </div>
  );
}

export default Landing;