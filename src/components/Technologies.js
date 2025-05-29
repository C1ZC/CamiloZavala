import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Importar íconos de tecnologías
import postman from "../assets/img/postman.svg";
import bootstrap from "../assets/img/bootstrap-5-1.svg";
import css3 from "../assets/img/css3.svg";
import figma from "../assets/img/figma.svg";
import github from "../assets/img/github.svg";
import git from "../assets/img/git.svg";
import javascript from "../assets/img/javascript.svg";
import mysql from "../assets/img/mysql.svg";
import react from "../assets/img/react.svg";
import visual from "../assets/img/visual.svg";
import html5 from "../assets/img/html5.svg";
import python from "../assets/img/python.svg.png";
import php from "../assets/img/php.png";
import android from "../assets/img/android.svg";
import java from "../assets/img/java.svg";
import spring from "../assets/img/spring.png";
import cpanel from "../assets/img/cpanel.png";
import cloudflare from "../assets/img/cloudflare.png";

export const Technologies = () => {
  const technologies = [
    { img: postman, name: "Postman" },
    { img: bootstrap, name: "Bootstrap" },
    { img: css3, name: "CSS3" },
    { img: figma, name: "Figma" },
    { img: github, name: "GitHub" },
    { img: git, name: "Git" },
    { img: javascript, name: "JavaScript" },
    { img: mysql, name: "MySQL" },
    { img: react, name: "React" },
    { img: visual, name: "VS Code" },
    { img: html5, name: "HTML5" },
    { img: python, name: "Python" },
    { img: php, name: "PHP" },
    { img: android, name: "Android" },
    { img: java, name: "Java" },
    { img: spring, name: "Spring" },
    { img: cpanel, name: "cPanel" },
    { img: cloudflare, name: "Cloudflare" }
  ];

  // Configuración del carrusel responsivo para tecnologías
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 6  // Más iconos en pantallas grandes
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 3
    }
  };

  return (
    <section className="technologies" id="technologies">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2 className="text-center">Tecnologías</h2>
                  <p className="text-center">
                    Estas son las principales tecnologías con las que he
                    trabajado en mis proyectos profesionales y personales.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    arrows={false} // Añadir esta línea para quitar las flechas
                    className="tech-carousel">
                    {technologies.map((tech, index) => (
                      <div key={index} className="tech-slide-item tech-item">
                        <div className="tech-icon">
                          <img src={tech.img} alt={tech.name} />
                        </div>
                        <h5>{tech.name}</h5>
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technologies;