import React from "react";
import step1 from "../img/step1.png";
import step2 from "../img/step2.png";
import step3 from "../img/step3.png";
import step4 from "../img/step4.png";
import step5 from "../img/step5.png";




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
            <img src={step1} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 step__text">
            <div className="step__text__icon">1</div>
            <div className="step__text__title">Zasoby</div>
            <div className="step__text__content">
              <p>
                <strong>Ty wysyłasz</strong> do nas trzy podstawowe informacje:</p>
              <ul>
                <li>jaki jest twój cel</li>
                <li>adresaci</li>
                <li>budżet</li>
                <li>materiały kampanijne, którymi dysponujesz</li>
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
            <img src={step2} alt="" />
          </div>
        </div>

        <div className="row step">
          <div className="col-lg-6 col-md-6 col-xs-12 step__image">
            <img src={step3} alt="" />
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
            <div className="step__text__title">Realizacja</div>
            <div className="step__text__content">
              <p>
                <strong>Realizujemy</strong> kampanię, której efekty można śledzić na bieżąco
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 order-first order-md-last order-lg-last step__image">
            <img src={step4} alt="" />
          </div>
        </div>


        <div className="row step">
          <div className="col-lg-6 col-md-6 col-xs-12 step__image">
            <img src={step5} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 step__text">
            <div className="step__text__icon">5</div>
            <div className="step__text__title">Raport</div>
            <div className="step__text__content">
              <p>
                Dostarczamy szczegółowy raport z efektów działań, obejmujący wszystkie KPI
              </p>
            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default Steps;
