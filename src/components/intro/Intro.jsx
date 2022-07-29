import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import principal from '../../assets/imgprincipal.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
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
              <FaAward className="about__icon" />
              <h5>Expectativa de início dos trabalhos:</h5>
              <small>2023</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Necessidades para o Projeto:</h5>
              <small>Patrocinadores para construção da estrutura.</small>
            </article>
          </div>
          <p>Há anos o desejo do nosso coração é montar uma Comunidade Terapêutica com voltada para a recuperação de dependentes químicos e de álcool.</p>
          <p>Este ano, como resposta deste desejo, conseguimos adquirir um terreno na região da Velha Grande, um dos locais mais atingidos pelo tráfico de drogas.</p>
          <p>Para dar uma resposta à essa prevalência de usuários e famílias aflitas, atingidas pelo tráfico no local, contamos com a ajuda de toda a comunidade Blumenauense para levantar recursos, afim de construir uma estrutura de acolhimento e, consequentemente, ajudar os que estão se perdendo.</p>
          <a href="#contact" className="btn btn-primary">Gostaria de ajudar?</a>
        </div>
      </div>
    </section>
  )
}

export default Intro