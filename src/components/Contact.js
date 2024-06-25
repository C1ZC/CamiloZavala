import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Contact = () => {
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Lest's Connect</h2>
                <p>Aunque mi camino en desarrollo acaba de comenzar, mis proyectos hablan por sí solos y motivado por el aprendizaje constante. Descubre mis proyectos y veamos cómo podemos colaborar.</p>

                <div className="social-icon">
                  <a onClick={() => window.location.href='mailto:camilo.zavala.c@gmail.com?subject=contacto&body='}><img src={navIcon4} alt="Correo" /></a>
                  <a href="https://www.linkedin.com/in/camilo-zavala-cornejo/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                </div>
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}