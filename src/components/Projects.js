import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
//import { useRef } from "react";

export const Projects = () => {

  const projects = [
    {
      title: "Aplicacion Web RRHH",
      description: "Pequeña aplicacion web para gestionar recursos humanos, crearda en React, Spring Boot y MySQL como base de datos, desplegada en Railway",
      imgUrl: projImg1,
      repoUrl: "https://github.com/C1ZC/rrss", // URL del repositorio
      appUrl: "https://rrss-production.up.railway.app/", // URL de la aplicación
  
    },
    {
      title: "Aplicacion Web Automotora",
      description: "Pequeña aplicacion web para gestionar una automotora, crearda en PHP y MySQL como base de datos, desplegada en Cpanel de Hostinger",
      imgUrl: projImg2,
      repoUrl: "https://github.com/C1ZC/Automotora", // URL del repositorio
      appUrl: "https://camilozavala.com/Automotora/", // URL de la aplicación
  
    },
    {
      title: "Login API Google",
      description: "Pequeña web con API de login de Google, creada en PHP desplegada en Cpanel de Hostinger",
      imgUrl: projImg3,
      repoUrl: "https://github.com/C1ZC/Login-API-Google", // URL del repositorio
      appUrl: "https://camilozavala.com/Login-API-Google", // URL de la aplicación
  
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
      repoUrl: "https://github.com/usuario/proyecto1", // URL del repositorio
      appUrl: "https://www.proyecto1.com", // URL de la aplicación
  
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      repoUrl: "https://github.com/usuario/proyecto1", // URL del repositorio
      appUrl: "https://www.proyecto1.com", // URL de la aplicación
  
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      repoUrl: "https://github.com/usuario/proyecto1", // URL del repositorio
      appUrl: "https://www.proyecto1.com", // URL de la aplicación
  
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Esta sección destaca proyectos que he desarrollado y desplegado para demostrar mis conocimientos y habilidades en programación web. Cada proyecto refleja mi capacidad para trabajar con diversas tecnologías y enfrentar retos de desarrollo personales y del mercado.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}