import React from 'react';
import Socials from '../icons/FooterIcons';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">COMUNIDADE TERAPÊUTICA CAVERNA DE ADULÃO</a>
      <Socials />
      <div className="footer__copyright">
        <small>&copy; Je4nPw {getCurrentYear()} </small>
      </div>
    </footer>
  )
}

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default Footer