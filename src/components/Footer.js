import React from "react";
import logo from "../img/logo.png";
import fb from "../img/fb.png";
import linkedin from "../img/linkedin.png";
import twitter from "../img/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="container footer">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-xs-12">
            <img src={logo} alt="logo" />
            <h4>Performance PR</h4>
            <ul>
              <li>ul. Złota 6/6</li>
              <li>03-956 Warszawa</li>
              <li>
                <a href="tel.:+48222996629">+48 22 299 66 29</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-xs-12">
            <h4 className="title">Menu</h4>
            <ul>
              <li>
                <a href="#">Poznaj Nas</a>
              </li>
              <li>
                <a href="#">Jak pracujemy?</a>
              </li>
              <li>
                <a href="#">Etapy działania</a>
              </li>
              <li>
                <a href="#">Usługi</a>
              </li>
              <li>
                <a href="#">Nasi klienci</a>
              </li>
              <li>
                <a href="#">Case study</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-xs-12">
            <h4 className="title">5 korkoów kampanii</h4>
            <ul>
              <li>
                <a href="#">Zasoby</a>
              </li>
              <li>
                <a href="#">Efekty</a>
              </li>
              <li>
                <a href="#">Etapy działania</a>
              </li>
              <li>
                <a href="#">Planowanie</a>
              </li>
              <li>
                <a href="#">Realizacja</a>
              </li>
              <li>
                <a href="#">Raport</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-xs-12">
            <h4 className="title">Usługi</h4>
            <ul>
              <li>
                <a href="#">Content marketing</a>
              </li>
              <li>
                <a href="#">Media relations</a>
              </li>
              <li>
                <a href="#">Komunikacja w social media</a>
              </li>
              <li>
                <a href="#">Boty</a>
              </li>
              <li>
                <a href="#">Geotargetowanie</a>
              </li>
              <li>
                <a href="#">Remarketing</a>
              </li>
              <li>
                <a href="#">Reklama online display</a>
              </li>
              <li>
                <a href="#">Reklama w social display</a>
              </li>
              <li>
                <a href="#">Reklama w prasie</a>
              </li>
              <li>
                <a href="#">Spoty w serwisach VOD, YouTube</a>
              </li>
              <li>
                <a href="#">Marketing automation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row background--gray footer__copyright">
          <div className="col-lg-4 col-md-4 col-xs-12 footer__copyright__block">
            <ul>
              <li>
                <a href="#">Polityka prywatności</a>
              </li>
              <li>
                <a href="#">Polityka cookies</a>
              </li>
              <li>
                <a href="#">Regulamin serwisu</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-12 footer__copyright__block">
            <ul>
              <li>
                <a href="#">
                  <img src={fb} alt="facebook" />

                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedin} alt="linkedin" />

                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />

                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-12 footer__copyright__block">
            <p>&#169;2019 Performance PR All right reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
