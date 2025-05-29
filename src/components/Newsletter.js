import { Col, Row,} from "react-bootstrap";
import '../assets/css/newsletter.css';

export const Newsletter = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("camilo.zavala.c@gmail.com");
    alert("Correo copiado al portapapeles");
  };

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h4 style={{ margin: 0 }}>camilo.zavala.c@gmail.com <button className="btn btn-primary" type="button" onClick={copyToClipboard}>Copiar</button></h4>
              </div>
            </Col>
            <Col md={6} xl={7}>
              <form>
                <div className="new-email-bx">
                <h4>camilo.zavala.c@gmail.com</h4>
                  <button type="button" onClick={() => window.location.href='mailto:camilo.zavala.c@gmail.com?subject=contacto&body='}>Enviar correo</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}