import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './comoajudar.css';

const Experience = () => {
  return (
    <section id="como-ajudar">
      <h5>"O homem generoso será abençoado, porquanto reparte seu pão com o necessitado."</h5>
      <h5>PV 22:9</h5>
      <h2>Coisas que você pode ajudar:</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Construção da CT</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Materiais de construção</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Materiais elétricos</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Materiais hidráulicos</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Mão de Obra</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Mobilia da CT</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Camas</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Colchões</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Cobertas</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Móveis em geral</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience