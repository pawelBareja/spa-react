import React from "react";
import Tilt from 'react-tilt';
import badge1 from "../img/badge1.png";
import badge2 from "../img/badge2.png";
import badge3 from "../img/badge3.png";
import badge4 from "../img/badge4.png";
import badge5 from "../img/badge5.png";
import badge6 from "../img/badge6.png";
import badge7 from "../img/badge7.png";
import badge8 from "../img/badge8.png";
import badge9 from "../img/badge9.png";
import badge10 from "../img/badge10.png";
import badge11 from "../img/badge11.png";
import badge12 from "../img/badge12.png";

const items = [
  {
    icon: badge1,
    text: "Content Marketing",
    color: "#0269b5",
  },
  {
    icon: badge2,
    text: "Media relations",
    color: "#e94e1b",
  },
  {
    icon: badge3,
    text: "Komunikacja w social media",
    color: "#251f5d",
  },
  {
    icon: badge4,
    text: "Boty",
    color: "#599fd2",
  },
  {
    icon: badge5,
    text: "Geotargetowanie",
    color: "#0269b5",
  },
  {
    icon: badge6,
    text: "Remarketing",
    color: "#ff7e00",
  },
  {
    icon: badge7,
    text: "Reklama online w display",
    color: "#e94e1b",
  },
  {
    icon: badge8,
    text: "Reklama online w social media",
    color: "#251f5d",
  },
  {
    icon: badge9,
    text: "Reklama w prasie",
    color: "#599fd2",
  },
  {
    icon: badge10,
    text: "Spoty w serwisach VOD",
    color: "#ff7e00",
  },
  {
    icon: badge11,
    text: "Youtube",
    color: "#0269b5",
  },
  {
    icon: badge12,
    text: "Marketing automation",
    color: "#e94e1b",
  }
];

// const divStyle = {
//   backgroundColor: item.color
// };

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
            <Tilt className="Tilt" options={{ reverse: false, max: 50, scale: 1, perspective: 500 }}  >
              <div style={{ backgroundColor: item.color }}
                className="grid__item"
                key={item.text}
              >
                <div className="grid__item__inside">
                  <img src={item.icon} alt="ikona" />
                  <div className="Tilt-inner">
                    <h3>{item.text}</h3>
                  </div>

                </div>
              </div>
            </Tilt>
          ))}
        </div>


      </div>
    </>
  );
};

export default Grid;
