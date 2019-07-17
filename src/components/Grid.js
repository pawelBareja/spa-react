import React from "react";
import ikona1 from "../glosnik.png";

const items = [
  {
    icon: "aaaaa",
    text: "Content Marketing"
  },
  {
    icon: "aaacaa",
    text: "Media relations"
  },
  {
    icon: "acccc",
    text: "Komunikacja w social media"
  },
  {
    icon: "adddd",
    text: "Boty"
  },
  {
    icon: "adddd",
    text: "Geotargetowanie"
  },
  {
    icon: "adddd",
    text: "Remarketing"
  },
  {
    icon: "adddd",
    text: "Reklama online w display"
  },
  {
    icon: "adddd",
    text: "Reklama online w social media"
  },
  {
    icon: "adddd",
    text: "Reklama w prasie"
  },
  {
    icon: "adddd",
    text: "Spoty w serwisach VOD"
  },
  {
    icon: "adddd",
    text: "Youtube"
  },
  {
    icon: "adddd",
    text: "Marketing automation"
  }
];

const divStyle = {
  backgroundColor: "blue"
};

const Grid = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-xs-12 title">
            <h2>Narzędzia i techniki, które wykorzystujemy</h2>
          </div>
        </div>

        <div className="row grid ">
          {items.map(item => (
            <div
              className="col-lg-4 col-md-4 col-xs-6 grid__item"
              key={item.icon}
            >
              {item.text}
            </div>
          ))}
        </div>

        <div className="row ">
          <div className="col-lg-12 col-md-12 col-xs-12 grid__text">
            <p>
              Zespół, który zajmuje się kampaniami Peformance PR na co dzień
              pracuje dla największych polskich i międzynarodowych firm, m.in.
              Arval BNP Paribas, ZyXEL Communications, PKO Bank Polski, PGNiG
              S.A, Netia SA i wielu innych.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
