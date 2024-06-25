import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {

  const projects = [
    {
      title: "Aplicacion Web RRHH",
      description: "Pequeña aplicacion web para gestionar recursos humanos, crearda en React, Spring Boot y MySQL como base de datos, desplegada en Railway",
      imgUrl: projImg1,
      repoUrl: "https://github.com/C1ZC/rrss", // URL del repositorio
      appUrl: "https://rrss-production.up.railway.app/", // URL de la aplicación
      skills: ['React', 'CSS', 'JavaScript','Bootstrap','Spring Boot','MySQL','Railway']
    },

    {
      title: "Aplicacion Web Automotora",
      description: "Pequeña aplicacion web para gestionar una automotora, crearda en PHP y MySQL como base de datos, desplegada en Cpanel de Hostinger",
      imgUrl: projImg2,
      repoUrl: "https://github.com/C1ZC/Automotora", // URL del repositorio
      appUrl: "https://camilozavala.com/Automotora/", // URL de la aplicación
      skills: ['HTML', 'CSS', 'JavaScript','PHP','MySQL','Materialize','Cpanel']
    },

    {
      title: "Login API Google",
      description: "Pequeña web hecha en PHP verion 8.3 con API OAuth 2.0 de login de Google, creada en PHP desplegada en Cpanel de Hostinger",
      imgUrl: projImg3,
      repoUrl: "https://github.com/C1ZC/Login-API-Google", // URL del repositorio
      appUrl: "https://camilozavala.com/Login-API-Google", // URL de la aplicación
      skills: ['HTML', 'CSS','JavaScript', 'PHP','Bootstrap','Cpanel','Google API OAuth 2.0']
    }

  ];
  const [currentProjectIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Proyectos</h2>
            <p>Aquí puedes ver algunos de los proyectos en los que he trabajado. Junto con </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme project-carousel"
              afterChange={() => setIsFullscreen(false)}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  isFullscreen={isFullscreen && currentProjectIndex === index}
                  toggleFullscreen={toggleFullscreen}
                />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Projects;