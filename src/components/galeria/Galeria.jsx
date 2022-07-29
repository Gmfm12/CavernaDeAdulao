import React from 'react';
import IMG1 from '../../assets/img1.jpg';
import IMG2 from '../../assets/img2.jpg';
import IMG3 from '../../assets/img3.jpg';
import IMG4 from '../../assets/img4.jpg';
import IMG5 from '../../assets/img5.jpg';
import IMG6 from '../../assets/img6.jpg';

import './galeria.css'; 

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      img: IMG1,
    },
    {
      id: 2,
      img: IMG4,
    },
    {
      id: 3,
      img: IMG2,
    },
    {
      id: 4,
      img: IMG3,
    },
    {
      id: 5,
      img: IMG5,
    },
    {
      id: 6,
      img: IMG6,
    },
  ];

  return (
    <section id="galeria">
      <h5>"Porque a ardente expectação da criatura espera a manifestação dos filhos de Deus."</h5>
      <h5>Rm 8:19</h5>
      <h2>Fotos do local onde será construída a CT</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
