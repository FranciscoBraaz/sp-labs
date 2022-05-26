import React from 'react';
import './styles.scss';
import footerImg from '../../assets/images/logo-black.svg';

function FooterGuide({ topic, links }) {
  return (
    <div className="guide">
      <h4 className="guide__topic">{topic}</h4>
      <ul className="guide__links">
        {links.map((link) => (
          <li key={link}>
            <a className="guide__anchor" href="/">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const guides = [
  { topic: 'SP Labs', links: ['Política de privacidade'] },
  { topic: 'Sem Processo', links: ['Sife', 'Produtos', 'Blog'] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer_wrapper-img">
            <img className="footer__img" src={footerImg} alt="SP Labs" />
          </div>
          <div className="footer__guides">
            {guides.map((guide) => (
              <FooterGuide
                key={guide.topic}
                topic={guide.topic}
                links={guide.links}
              />
            ))}
          </div>
        </div>
        <div className="footer__divider" />
        <p className="footer__copyright">
          SP Labs 2022. Feito por Francisco Braz
        </p>
      </div>
    </footer>
  );
}
