import meter1 from "../assets/img/DIPLOMA EN DESARROLLO WEB.png";
import meter2 from "../assets/img/DIPLOMA EN FUNDAMENTOS DE PROGRAMACIÓN Y BASES DE DATOS -1.png";
import meter3 from "../assets/img/DIPLOMA EN PROGRAMACIÓN AVANZADA -1.png";
import meter4 from "../assets/img/UC-165c323b-3602-4683-82fd-1e9559c6b039-1.png";
import meter5 from "../assets/img/Camilo Ignacio Zavala Cornejo - 2024-05-27-1.png";
import meter6 from "../assets/img/Camilo Ignacio Zavala Cornejo - 2024-06-10-1.png";
import meter7 from "../assets/img/certificado tecnico nivel medio-1.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "skill-bx wow animate__animated animate__fadeIn"
                      : "skill-bx"
                  }>
                  <h2>Certificados</h2>
                  <p>
                    Diplomas de cursos y certificados obtenidos en los cursos
                    del Instituto IACC y en otros lugares. <br></br>
                  </p>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }>
                        <Carousel
                          responsive={responsive}
                          infinite={true}
                          className="owl-carousel owl-theme skill-slider">
                          <div className="item">
                            <img src={meter1} alt="Diploma en Desarrollo Web" />
                            <h5>Desarrollo Web</h5>
                          </div>
                          <div className="item">
                            <img
                              src={meter2}
                              alt="Diploma en Fundamentos de Programación y Bases de Datos"
                            />
                            <h5>
                              Fundamentos de Programación y Bases de Datos
                            </h5>
                          </div>
                          <div className="item">
                            <img
                              src={meter3}
                              alt="Diploma en Programación Avanzada"
                            />
                            <h5>Programación Avanzada</h5>
                          </div>
                          <div className="item">
                            <img src={meter4} alt="Certificado UC" />
                            <h5>Certificado UC</h5>
                          </div>
                          <div className="item">
                            <img
                              src={meter5}
                              alt="Certificado Camilo Ignacio Zavala Cornejo"
                            />
                            <h5>Camilo Ignacio Zavala Cornejo</h5>
                          </div>
                          <div className="item">
                            <img
                              src={meter6}
                              alt="Certificado Camilo Ignacio Zavala Cornejo"
                            />
                            <h5>Camilo Ignacio Zavala Cornejo</h5>
                          </div>
                          <div className="item">
                            <img
                              src={meter7}
                              alt="Certificado Técnico Nivel Medio"
                            />
                            <h5>Técnico Nivel Medio</h5>
                          </div>
                        </Carousel>
                      </div>
                    )}
                  </TrackVisibility>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Imágenes" />
    </section>
  );
}
