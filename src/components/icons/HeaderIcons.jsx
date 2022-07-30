import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi'
import './header-icons.css';

const HeaderIcons = () => {
    return (
        <div className="header__socials">
            <a href="https://www.facebook.com/ctcavernadeadulao" target="_blank" rel="noreferrer" ><BsFacebook /></a>
            <a href="https://www.instagram.com/ctcavernadeadulao/" target="_blank" rel="noreferrer" ><BsInstagram /></a>
            <a href="https://api.whatsapp.com/send/?phone=5547997915103&text=Estou+entrando+em+contato+atrav%C3%A9s+do+site." target="_blank" rel="noreferrer" ><BsWhatsapp /></a>
            <a href="https://www.google.com/maps/place/Comunidade+Terap%C3%AAutica+Caverna+de+Adul%C3%A3o/@-26.9521945,-49.142794,15z/data=!4m5!3m4!1s0x0:0xfce8ec24486c44b5!8m2!3d-26.9521945!4d-49.142794" target="_blank" rel="noreferrer" ><FiMapPin /></a>
        </div>
    )
}

export default HeaderIcons; 