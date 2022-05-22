import React from 'react';
import logoWhite from '../../assets/images/logo-white.svg';
import './styles.css';

export function Menu() {
  return (
    <div className="menu">
      <img src={logoWhite} alt="SP Labs" className="menu__logo" />
      <nav className="menu__nav">
        <ul className="menu__list">
          <li className="menu__item">Cases</li>
          <li className="menu__item">Produto</li>
        </ul>
      </nav>
    </div>
  );
}
