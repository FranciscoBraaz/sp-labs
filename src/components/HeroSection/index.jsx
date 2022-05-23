import React from 'react';
import './styles.css';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="container">
          <div className="hero__content">
            <h2 className="hero__title">
              Imagine, crie, implemente e{' '}
              <span className="hero__title hero__title--italic">evolua</span>
            </h2>
            <p className="hero__subtitle">
              Porque não basta resolver apenas os conflitos do mundo do direito
            </p>
            <button className="hero__button">Inicie sua jornada</button>
          </div>
        </div>
      </div>
    </section>
  );
}
