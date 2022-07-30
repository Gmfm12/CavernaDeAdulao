import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import './contato.css';

const Contato = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        '',
        '',
        formRef.current,
        ''
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contato">
      <h5>"Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará." Sl 91:1</h5>
      <h2>Contato</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>cavernadeadulaoct@gmail.com</h5>
            <a href="mailto:cavernadeadulaoct@gmail.com">Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <BsTelephoneOutboundFill className="contact__option-icon" />
            <h4>Telefone</h4>
            <h5>(47)99791-5103</h5>
            <h5><i>Natanael D. T. de Freitas</i></h5>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome completo"
            name="user_name"
            required
            disabled
          />
          <input
            type="text"
            placeholder="Seu melhor e-mail"
            name="user_email"
            required
            disabled
          />
          <textarea
            placeholder="Mensagem"
            rows="3"
            name="message"
            required
            disabled
          ></textarea>
          <button type="submit" className="btn btn-primary disabled">
            Enviar
          </button>
          {message && <span>Este formulário ainda não está funcionando, entre em contato pelo whatsapp (47)997915103 :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contato;
