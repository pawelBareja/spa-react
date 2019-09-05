import React from "react";
import icon1 from "../img/glosnik.png";

const items = [
  {
    icon: icon1,
    text: "Content Marketing"
  },
  {
    icon: icon1,
    text: "Media relations"
  },
  {
    icon: icon1,
    text: "Komunikacja w social media"
  },
  {
    icon: icon1,
    text: "Boty"
  },
  {
    icon: icon1,
    text: "Geotargetowanie"
  },
  {
    icon: icon1,
    text: "Remarketing"
  },
  {
    icon: icon1,
    text: "Reklama online w display"
  },
  {
    icon: icon1,
    text: "Reklama online w social media"
  },
  {
    icon: icon1,
    text: "Reklama w prasie"
  },
  {
    icon: icon1,
    text: "Spoty w serwisach VOD"
  },
  {
    icon: icon1,
    text: "Youtube"
  },
  {
    icon: icon1,
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
              key={item.text}
            >
              <div className="grid__item__inside">
                <img src={item.icon} alt="ikona" />
                <h3>{item.text}</h3>
              </div>
            </div>
          ))}
        </div>


      </div>
    </>
  );
};

export default Grid;
