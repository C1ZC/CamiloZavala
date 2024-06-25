import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import cv from "../assets/CV/Camilo_CV.pdf";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import '../assets/css/banner.css';
import TrackVisibility from 'react-on-screen';
import meter1 from "../assets/img/postman.svg";
import meter2 from "../assets/img/bootstrap-5-1.svg";
import meter3 from "../assets/img/css3.svg";
import meter4 from "../assets/img/figma.svg";
import meter5 from "../assets/img/github.svg";
import meter6 from "../assets/img/git.svg";
import meter7 from "../assets/img/javascript.svg";
import meter8 from "../assets/img/mysql.svg";
import meter9 from "../assets/img/react.svg";
import meter10 from "../assets/img/visual.svg";
import meter11 from "../assets/img/html5.svg";
import meter12 from "../assets/img/python.svg.png";
import meter13 from "../assets/img/php.png";
import meter14 from "../assets/img/android.svg";
import meter15 from "../assets/img/java.svg";
import meter16 from "../assets/img/spring.png";
import meter17 from "../assets/img/cpanel.png";
import meter18 from "../assets/img/cloudflare.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Front-End Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenid@ a mi Portafolio</span>
                <h1>{`Hi! I'm Camilo`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Front End Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Estudiante de ultimo año en Ingeniería Informática con una formación integral en
                    desarrollo de software, redes y seguridad, desarrollo web, y
                    aplicaciones móviles. Busco unirme a una organización tecnológica
                    donde pueda aplicar mis conocimientos y contribuir al desarrollo de
                    soluciones innovadoras.</p>
                  <a href={cv} download>
                  <button>Descargar CV <ArrowRightCircle size={25} /></button></a>
                  <div className="mt-4 ban-img">
                      <Col xs={12}>
                        <Row>
                          <Col xs={1} className="mb-3"><img src={meter1} alt="Postman" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter2} alt="Bootstrap" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter3} alt="CSS3" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter4} alt="Figma" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter5} alt="GitHub" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter6} alt="Git" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter7} alt="JavaScript" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter8} alt="MySQL" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter9} alt="React" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter10} alt="Visual Studio Code" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter11} alt="HTML5" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter12} alt="Python" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter13} alt="PHP" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter14} alt="Android Studio" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter15} alt="Java" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter16} alt="Spring Boot" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter17} alt="Cpanel" className="img-fluid"/></Col>
                          <Col xs={1} className="mb-3"><img src={meter18} alt="Cloudflare" className="img-fluid"/></Col>
                        </Row>
                      </Col>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>     
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn animated-img" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}