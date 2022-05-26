import React from 'react';
import { Link } from 'react-scroll';
import logoWhite from '../../assets/images/logo-white.svg';
import './styles.scss';

export function Menu() {
  return (
    <div className="menu">
      <img src={logoWhite} alt="SP Labs" className="menu__logo" />
      <nav className="menu__nav">
        <ul className="menu__list">
          <li className="menu__item">
            <Link
              to="casesSection"
              smooth={true}
              duration={500}
              offset={0}
              className="menu__link"
            >
              Cases
            </Link>
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
