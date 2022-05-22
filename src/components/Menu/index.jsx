import React from 'react';
import logoWhite from '../../assets/images/logo-white.svg';
import './styles.css';

export function Menu() {
  return (
    <div className="menu">
      <img src={logoWhite} alt="SP Labs" className="menu__logo" />
      <nav className="menu__nav">
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#cases">
              Cases
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#products">
              Produtos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
