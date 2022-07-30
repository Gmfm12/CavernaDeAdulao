import React, { useState } from 'react';
import { GiHouse } from 'react-icons/gi';
import { BsBookFill } from 'react-icons/bs';
import { FaHandsHelping } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';
import { BsChatQuoteFill } from 'react-icons/bs';

import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><GiHouse /></a>
      <a href="#sobre" onClick={() => setActiveNav('#sobre')} className={activeNav === '#sobre' ? 'active' : ''}><BsBookFill /></a>
      <a href="#como-ajudar" onClick={() => setActiveNav('#como-ajudar')} className={activeNav === '#como-ajudar' ? 'active' : ''}><FaHandsHelping /></a>
      <a href="#galeria" onClick={() => setActiveNav('#galeria')} className={activeNav === '#galeria' ? 'active' : ''}><FaPhotoVideo /></a>
      <a href="#contato" onClick={() => setActiveNav('#contato')} className={activeNav === '#contato' ? 'active' : ''}><BsChatQuoteFill /></a>
    </nav>
  )
}

export default Topbar;