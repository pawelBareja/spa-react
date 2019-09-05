import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { IoIosArrowDown } from "react-icons/io";

class Header extends Component {
  render() {
    return (
      <>
        <Jumbotron>
          <div className="container">
            <h1>Performance PR</h1>
            <p>
              to jedyna usługa, której potrzebujesz <br /> by zrealizować cele Twojej kampanii!
            </p>
            <p>
              <Button variant="light hover-shadow ">Rozpocznij</Button>
            </p>
          </div>
          <div className="scroll_down">
            <IoIosArrowDown />
          </div>
        </Jumbotron>
        <div className="row background_blue">
          <div className="col-lg-12 text-center">
            <div className="container text_white">
              <h2>
                Poznaj Nas
              </h2>
              <div className="section">
                <p>
                  Performance PR to owoc współpracy dwóch doświadczonych zespołów:
              </p>
                <p>
                  <strong>Neuron Agencji PR oraz Performance Labs</strong>
                </p>
              </div>
              <div className="section">
                <p>
                  Połączyliśmy wieloletnie <strong>doświadczenie</strong> w tworzeniu skutecznych
              </p>
                <p>
                  kampanii wizerunkowych z kompetencjami z zakresu performance marketingu
              </p>
              </div>
              <div className="section">
                <p>
                  Stworzyliśmy nowe, unikalne połączenie: <strong>precyzyjnie</strong> skalkulowane kampanie,
              </p>
                <p>
                  w których gwarantujemy osiągnięcie precyzyjnie określonych celów
              </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
