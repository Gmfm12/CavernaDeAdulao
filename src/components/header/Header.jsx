import React from 'react';
import './header.css';
import logo from '../../assets/ctca_logo.png'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <img src={logo} class="img-logo" alt="logo CTCA"></img>
        <h4>Projeto</h4>
        <h1>Caverna de Adulão</h1>
        <h5 className="text-light">Comunidade Terapêutica</h5>
      </div>
    </header>
  )
}

export default Header