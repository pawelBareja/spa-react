import React from "react";
import ikona1 from "../img/ikona1.png";
import ikona2 from "../img/ikona2.png";

const featureItems = [
  {
    image: ikona1,
    title: "Końcowy efekt",
    text: "Interesuje Cię końcowy efekt w postaci zrealizowanych celów marketingowych"
  },
  {
    image: ikona2,
    title: "Wszystko w jednym",
    text: "Nie chcesz marnować zasobów na zarządzanie trzema różnymi agencjami: od PRu, od social mediów i od reklamy online"
  },
  {
    image: ikona1,
    title: "Maksymalne wyniki",
    text: "Chcesz maksymalnie efektywnie wykorzystać budżet, którym dysponujesz"
  }
];

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-xs-12 title">
            <h2>Dlaczego Performance PR?</h2>
            <p>Performance PR to najlepsze rozwiązanie wtedy gdy:</p>
          </div>
        </div>
        <div className="row">
          {featureItems.map(item => (
            <div
              key={item.text}
              className="col-lg-4 col-md-4 col-xs-12 feature"
            >
              <img src={item.image} alt="obrazek" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
