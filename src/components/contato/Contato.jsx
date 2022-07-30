import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './contato.css';

const Contato = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_bewdvub',
        'template_jgag65a',
        formRef.current,
        'xHbo1isp_P5JfqwV_'
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
        <CopyToClipboard text="cavernadeadulaoct@gmail.com">
          <article className="contact__option" onClick={()=>{ alert('Chave PIX foi copiada para a área de transferência :)'); }}>
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-mail e PIX</h4>
              <h5>cavernadeadulaoct@gmail.com</h5>
            <h5>Clique para copiar</h5>
          </article>
          </CopyToClipboard>
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
            name="from_name"
            required
          />
          <input
            type="text"
            placeholder="Seu melhor e-mail"
            name="user_email"
            required
          />
          <textarea
            placeholder="Mensagem"
            rows="3"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          {message && <span>Mensagem enviada, entraremos em contato pelo whatsapp (47)99791-5103 :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contato;
