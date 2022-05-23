import React, { useCallback, useState } from 'react';
import api from '../../services/api';
import { Modal } from '../Modal';
import { Select } from '../Select';
import './styles.css';

const segments = ['Tecnologia', 'Marketing', 'Direito', 'Engenharia'];

export function ContactSection() {
  const [name, setName] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await api
      .post('/contact', {
        name,
      })
      .then(() => {
        setModalMessage(`Obrigado pelo contato ${name}!`);
      })
      .catch(() => {
        setModalMessage(`Ops, houve um problema no envio!`);
      })
      .finally(() => {
        setModalIsOpen(true);
      });
  }

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <section className="contact">
      {modalIsOpen && (
        <Modal
          handleClose={handleCloseModal}
          message={modalMessage}
          modalIsOpen={modalIsOpen}
        />
      )}
      <div className="container">
        <div className="contact__content">
          <h2 className="contact__title">Não fique parado, fale conosco</h2>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              className="contact__input"
              type="name"
              required
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder="Seu nome"
            />
            <input
              className="contact__input"
              type="email"
              required
              placeholder="Seu email"
            />
            <Select segments={segments} />
            <textarea
              className="contact__input contact__input--textarea"
              type="info"
              required
              placeholder="Fale um pouco sobre o seu negócio"
            />
            <label className="contact__terms">
              <input
                required
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
            <button
              className="contact__sumbmit"
              // disabled={checkIsDisabled()}
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
