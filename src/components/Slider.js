import InfiniteCarousel from "react-leaf-carousel";
import React, { Component } from "react";
import logo1 from "../img/logo1.png";

class Slider extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-xs-12 title">
              <h2>Współpracuj z nami, żeby osiągnąć sukces!</h2>
              <p className="text_black">Zespół, który zajmuje się kampaniami Peformance PR na co dzień pracuje dla największych polskich i międzynarodowych firm, m.in. Arval BNP Paribas, ZyXEL Communications, PKO Bank Polski, PGNiG S.A, Netia SA i wielu innych</p>
            </div>
          </div>
          {/*           
         <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }
            ]}
            arrows={false}
            dots={true}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={5}
            scrollOnDevice={true}
            autoCycle={true}
            cycleInterval={3000}
            pauseOnHover={true}
            animationDuration={500}
          >
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
            <div>
              <img className="carousel__img" alt="" src={logo1} />
            </div>
          </InfiniteCarousel>  */}

        </div>
      </>
    );
  }
}

export default Slider;
