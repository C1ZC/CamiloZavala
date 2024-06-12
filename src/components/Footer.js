import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/camilo-zavala-cornejo/"><img src={navIcon1} alt="" /></a>
                <a href="https://stackexchange.com/users/32889794/camilo-zavala-cornejo"><img src={navIcon2} alt="" /></a>
                {/* <a href="#"><img src={navIcon3} alt="" /></a> */}
              </div>
            <p>Copyright 2024. C1ZC All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
