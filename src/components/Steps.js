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
                Ty wysyłasz do nas 3 podstawoe infownce Ty wysyłasz do nas 3
                podstawoe infownce Ty wysyłasz do nas 3 podstawoe infownce
              </p>
            </div>
          </div>
        </div>

        <div className="row step">
          <div className="col-lg-6 col-md-6 col-xs-12 step__text">
            <div className="step__text__icon">2</div>
            <div className="step__text__title">Zasoby</div>
            <div className="step__text__content">
              <p>
                Ty wysyłasz do nas 3 podstawoe infownce Ty wysyłasz do nas 3
                podstawoe infownce Ty wysyłasz do nas 3 podstawoe infownce
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
            <div className="step__text__title">Zasoby</div>
            <div className="step__text__content">
              <p>
                Ty wysyłasz do nas 3 podstawoe infownce Ty wysyłasz do nas 3
                podstawoe infownce Ty wysyłasz do nas 3 podstawoe infownce
              </p>
            </div>
          </div>
        </div>

        <div className="row step">
          <div className="col-lg-6 col-md-6 col-xs-12 step__text">
            <div className="step__text__icon">4</div>
            <div className="step__text__title">Zasoby</div>
            <div className="step__text__content">
              <p>
                Ty wysyłasz do nas 3 podstawoe infownce Ty wysyłasz do nas 3
                podstawoe infownce Ty wysyłasz do nas 3 podstawoe infownce
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
