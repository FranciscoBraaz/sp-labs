import React from 'react';
import './styles.css';

export function Banner() {
  return (
    <section className="banner">
      <div className="banner__overlay">
        <div className="container">
          <div className="banner__content">
            <h2 className="banner__title">
              Imagine, crie, implemente e{' '}
              <span className=" banner__title--italic">evolua</span>
            </h2>
            <p className="banner__subtitle">
              Porque não basta resolver apenas os conflitos do mundo do direito
            </p>
            <button className="banner__button">Inicie sua jornada</button>
          </div>
        </div>
      </div>
    </section>
  );
}
