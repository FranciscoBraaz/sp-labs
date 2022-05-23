import React from 'react';
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';
import './styles.css';

export function Cases() {
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
          <div className="cases__item">
            <h4 className="cases__item__title">Solução 1</h4>
            <p className="cases__item__description">
              Repita comigo: Não vou esquecer de prestar atenção se está tudo
              alinhadinho. Não vou esquecer de prestar atenção se está tudo
              alinhado. Não vou esquecer de prestar atenção.
            </p>
            <button className="cases__item__button">
              Acesse
              <ArrowRight />
            </button>
          </div>
          <div className="cases__item">
            <h4 className="cases__item__title">Solução 1</h4>
            <p className="cases__item__description">
              Repita comigo: Não vou esquecer de prestar atenção se está tudo
              alinhadinho. Não vou esquecer de prestar atenção se está tudo
              alinhado. Não vou esquecer de prestar atenção.
            </p>
            <button className="cases__item__button">
              Acesse
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
