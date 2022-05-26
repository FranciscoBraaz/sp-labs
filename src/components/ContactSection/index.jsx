import React, { useCallback, useState } from 'react';
import api from '../../services/api';
import { Loader } from '../Loader';
import { Modal } from '../Modal';
import { Select } from '../Select';
import './styles.scss';

const segments = ['Tecnologia', 'Marketing', 'Direito', 'Engenharia'];

export function ContactSection() {
  const [name, setName] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmiting(true);

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
        setIsSubmiting(false);
      });
  }

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
    document.body.style.paddingRight = '0px';
    document.body.style.overflowY = 'visible';
    setModalMessage('');
  }, []);

  return (
    <>
      {modalIsOpen && (
        <Modal
          handleClose={handleCloseModal}
          message={modalMessage}
          modalIsOpen={modalIsOpen}
        />
      )}
      <section className="contact">
        <div className="container contact__content">
          <h2 className="contact__title">Não fique parado, fale conosco</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="form__input"
              type="name"
              required
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder="Seu nome"
            />
            <input
              className="form__input"
              type="email"
              placeholder="Seu email"
            />
            <Select segments={segments} />
            <textarea
              className="form__input form__input--textarea"
              type="info"
              placeholder="Fale um pouco sobre o seu negócio"
            />
            <label className="form__terms">
              <input
                required
                type="checkbox"
                className="form__checkbox"
                onChange={() => setAgreedTerms((prevState) => !prevState)}
                checked={agreedTerms}
              />
              <span className="form__declaration">
                Declaro que conheço a Política de Privacidade e autorizo a
                utilização das minhas informações pelo SP Labs
              </span>
            </label>
            <button
              className="form__sumbmit"
              disabled={isSubmiting}
              type="submit"
            >
              {isSubmiting ? <Loader /> : 'Enviar'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
