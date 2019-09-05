import React from "react";
import foto1 from "../img/foto1.png";

const Steps = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-xs-12 title">
            <h2>
              5 Kroków do sukcesu <br /> kampanii Performance PR
            </h2>
          </div>
        </div>

        <div className="row step">
          <div className="col-lg-6 col-md-6 col-xs-12 step__image">
            <img src={foto1} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 step__text">
            <div className="step__text__icon">1</div>
            <div className="step__text__title">Zasoby</div>
            <div className="step__text__content">
              <p>
                <strong>Ty wysyłasz</strong> do nas trzy podstawowe informacje:</p>
              <ul>
                <li>JAKI JEST TWÓJ CEL</li>
                <li>ADRESACI</li>
                <li>BUDŻET</li>
                <li>MATERIAŁY KAMPANIJNE, którymi dysponujesz</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row step">
          <div className="col-lg-6 col-md-6 col-xs-12 step__text">
            <div className="step__text__icon">2</div>
            <div className="step__text__title">Efekty</div>
            <div className="step__text__content">
              <p>Odsyłamy proponowane mierniki i efekty, które zobowiązujemy się dostarczyć w tym budżecie (M.IN. zasięgi publikacji medialnych, liczby wejść na strony, liczby pobrań materiałów etc).
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 order-first order-md-last order-lg-last step__image">
            <img src={foto1} alt="" />
          </div>
        </div>

        <div className="row step">
          <div className="col-lg-6 col-md-6 col-xs-12 step__image">
            <img src={foto1} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 step__text">
            <div className="step__text__icon">3</div>
            <div className="step__text__title">Planowanie</div>
            <div className="step__text__content">
              <p>
                Jeżeli akceptujesz propozycję, podpisujemy umowę i organizujemy warsztat strategiczny, po którym otrzymujesz szczegółowy plan działań
              </p>
            </div>
          </div>
        </div>

        <div className="row step">
          <div className="col-lg-6 col-md-6 col-xs-12 step__text">
            <div className="step__text__icon">4</div>
            <div className="step__text__title">Raport</div>
            <div className="step__text__content">
              <p>
                Dostarczamy szczegółowy raport z efektów działań, obejmujący wszystkie KPI
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 order-first order-md-last order-lg-last step__image">
            <img src={foto1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
