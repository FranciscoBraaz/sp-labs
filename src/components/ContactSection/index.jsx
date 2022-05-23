import React, { useCallback, useState } from 'react';
import { Select } from '../Select';
import './styles.css';

const segments = ['Tecnologia', 'Marketing', 'Direito', 'Engenharia'];

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');
  const [segment, setSegment] = useState('segment');
  const [agreedTerms, setAgreedTerms] = useState(false);

  const handleChangeSegment = useCallback((value) => {
    setSegment(value);
  }, []);

  function handleSubmit() {
    console.log(segment);
  }

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__content">
          <h2 className="contact__title">Não fique parado, fale conosco</h2>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              className="contact__input"
              type="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder="Seu nome"
            />
            <input
              className="contact__input"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Seu email"
            />
            <Select
              handleChangeSegment={handleChangeSegment}
              segments={segments}
            />
            <textarea
              className="contact__input contact__input--textarea"
              type="info"
              value={info}
              onChange={({ target }) => setInfo(target.value)}
              placeholder="Fale um pouco sobre o seu negócio"
            />
            <label className="contact__terms">
              <input
                type="checkbox"
                className="contact__checkbox"
                onChange={() => setAgreedTerms((prevState) => !prevState)}
                checked={agreedTerms}
              />
              <span className="contact__declaration">
                Declaro que conheço a Política de Privacidade e autorizo a
                utilização das minhas informações pelo SP Labs
              </span>
            </label>
            <button className="contact__sumbmit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
