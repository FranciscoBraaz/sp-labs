import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';
import './styles.css';

function Case({ title, description }) {
  return (
    <div className="cases__item">
      <h4 className="cases__item__title">{title}</h4>
      <p className="cases__item__description">{description}</p>
      <button className="cases__item__button">
        Acesse
        <ArrowRight />
      </button>
    </div>
  );
}

export function Cases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    async function fetchCases() {
      await api
        .get('/cases')
        .then((response) => {
          setCases(response.data.cases);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchCases();
  }, []);

  return (
    <section className="cases">
      <div className="container">
        <div className="cases__container-title">
          <h2 className="cases__title">
            Problemas complexos. <br />
            Soluções <strike>complexas</strike> <i>criativas_</i>
          </h2>
          <p className="cases__subtitle">
            Confira nossos cases de sucesso que vão além do mundo juridico.
          </p>
        </div>
        <div className="cases__container-items">
          {cases.map((caseItem) => (
            <Case title={caseItem.title} description={caseItem.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
