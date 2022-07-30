import React from 'react';
import { MdConstruction } from 'react-icons/md';
import { RiHandCoinLine } from 'react-icons/ri';
import principal from '../../assets/imgprincipal.jpg';
import './sobre.css';

const Intro = () => {
  return (
    <section id="sobre">
      <h2>Sobre o Projeto "Caverna de Adulão"</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={principal} alt="imagem principal" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiHandCoinLine className="about__icon" />
              <h5>PIX:</h5>
              <small>Para apoiar financeiramente, você pode fazer um pix para o nosso e-mail</small>
              <br></br>
              <a href="#contato" className="btn btn-primary">Ajudar</a>
            </article>
            <article className="about__card">
              <MdConstruction className="about__icon" />
              <h5>Apoiadores:</h5>
              <small>Você pode ser um patrocinador para construção da estrutura.</small>
              <br></br>
              <a href="#contato" className="btn btn-primary">Ajudar</a>
            </article>
          </div>
          <p>Há anos o desejo do nosso coração é montar uma Comunidade Terapêutica com voltada para a recuperação de dependentes químicos e de álcool.</p>
          <p>Este ano, como resposta deste desejo, conseguimos adquirir um terreno na região da Velha Grande, um dos locais mais atingidos pelo tráfico de drogas.</p>
          <p>Para dar uma resposta à essa prevalência de usuários e famílias aflitas, atingidas pelo tráfico no local, contamos com a ajuda de toda a comunidade Blumenauense para levantar recursos, afim de construir uma estrutura de acolhimento e, consequentemente, ajudar os que estão se perdendo.</p>
          <a href="#contato" className="btn btn-primary">Gostaria de ajudar?</a>
        </div>
      </div>
    </section>
  )
}

export default Intro