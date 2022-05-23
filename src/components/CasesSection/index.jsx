import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';
import './styles.css';
import { CaseSkeleton } from '../CaseSkeleton';

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

function Skeleton() {
  return (
    <div className="cases__container-items">
      <CaseSkeleton />
      <CaseSkeleton />
      <CaseSkeleton />
    </div>
  );
}

export function CasesSection() {
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchCases() {
      setIsLoading(true);
      await api
        .get('/cases')
        .then((response) => {
          setCases(response.data.cases);
        })
        .catch((error) => {
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    fetchCases();
  }, []);

  return (
    <section id="casesSection" className="cases">
      <div className="container">
        <div className="cases__container-title">
          <h2 className="cases__title">
            Problemas complexos. <br />
            Soluções <span className="cases__strike">complexas</span>{' '}
            <i>criativas_</i>
          </h2>
          <p className="cases__subtitle">
            Confira nossos cases de sucesso que vão além do mundo juridico.
          </p>
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="cases__container-items">
            {hasError ? (
              <p className="cases__error">
                ❌ Não possível carregar nossos cases
              </p>
            ) : (
              cases.map((caseItem) => (
                <Case
                  key={caseItem.title}
                  title={caseItem.title}
                  description={caseItem.description}
                />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
