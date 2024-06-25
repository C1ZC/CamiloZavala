import { Col, Row,} from "react-bootstrap";

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
              <h4 className="1">camilo.zavala.c@gmail.com <button class="btn btn-primary" type="button" onClick={copyToClipboard}>Copiar</button></h4>
              
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