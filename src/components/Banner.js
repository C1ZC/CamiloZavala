import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import cv from "../assets/CV/Camilo_CV.pdf";
import { Download } from "react-bootstrap-icons"; 
import 'animate.css';
import '../assets/css/banner.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [downloading, setDownloading] = useState(false);
  const toRotate = [
    "Full Stack Developer",
    "Integración de IA",
    "Desarrollador Python & JavaScript",
  ];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleDownload = () => {
    setDownloading(true);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <span className="tagline">Bienvenid@ a mi Portafolio</span>
                  <h1>
                    {`Hola, soy Camilo`}
                    <br />{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "Full Stack Developer", "Integración de IA", "Desarrollador Python & JavaScript" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Ingeniero Informático especializado en desarrollo Full Stack
                    e integración de inteligencia artificial mediante APIs.
                    Experiencia en automatización de procesos y despliegue de
                    soluciones en la nube. He trabajado con tecnologías como
                    Python, JavaScript, Django, FastAPI, Vue.js, React, Azure,
                    Docker y bases de datos SQL/NoSQL. Mi objetivo es aportar
                    soluciones innovadoras y escalables que optimicen la
                    eficiencia y la experiencia de los usuarios, combinando
                    habilidades técnicas y visión estratégica.
                  </p>
                  <a
                    href={cv}
                    download
                    onClick={handleDownload}
                    className={downloading ? "downloading" : ""}>
                    <button className="btn">
                      {downloading ? (
                        <>
                          Descargando <span className="download-dots"></span>
                        </>
                      ) : (
                        <>
                          Descargar CV{" "}
                          <Download size={25} className="download-icon" />
                        </>
                      )}
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn animated-img"
                      : ""
                  }>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}