import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import '../assets/css/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="mailto:camilo.zavala.c@gmail.com?subject=contacto&body="
                target="_blank"
                rel="noopener noreferrer">
                <img src={navIcon4} alt="Email" />
              </a>
              <a
                href="https://www.linkedin.com/in/camilo-zavala-cornejo/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://stackexchange.com/users/32889794/camilo-zavala-cornejo"
                target="_blank"
                rel="noopener noreferrer">
                <img src={navIcon2} alt="StackExchange" />
              </a>
              <a
                href="https://github.com/C1ZC"
                target="_blank"
                rel="noopener noreferrer">
                <img src={navIcon3} alt="GitHub" />
              </a>
            </div>
            <p>Copyright 2025. C1ZC All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
