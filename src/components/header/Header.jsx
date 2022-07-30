import React from 'react';
import './header.css';
import logo from '../../assets/ctca_logo.png';
import Socials from '../icons/HeaderIcons';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <img src={logo} class="img-logo" alt="logo CTCA"></img>
        <h3>Comunidade Terapêutica</h3>
        <h1>Caverna de Adulão</h1>
        <h5 className="text-light"><i>Mas Deus escolheu as coisas loucas do mundo para envergonhar os sábios, e escolheu as coisas fracas do mundo para envergonhar as fortes.</i></h5>
        <h6>1 CO 1:27</h6>
      </div>
      <Socials />
    </header>
  )
}

export default Header