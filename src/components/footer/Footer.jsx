import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">COMUNIDADE TERAPÊUTICA CAVERNA DE ADULÃO</a>
      <ul className="permalinks">
        <li><a href="#home">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Como Ajudar</a></li>
        <li><a href="#portfolio">Fotos</a></li>
        <li><a href="#contact">Contatos</a></li>
      </ul>
      <div className="footer__socials">
      <a href="#" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="#" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="#" target="_blank" rel="noreferrer" ><FaAngellist /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Je4nPw 2022.</small>
      </div>
    </footer>
  )
}

export default Footer