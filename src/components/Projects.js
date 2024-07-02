import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
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
    },
    {
      title: "Camilo Zavala HERPM13051 S9",
      description: "Aplicación Android desarrollada en Kotlin, incluye una pantalla inicial con animación y menú, un listado de vendedores y una funcionalidad de reproducción de audio al seleccionar un vendedor específico. También permite capturar y guardar fotos y visualizar un gráfico de ventas.",
      imgUrl: projImg4,
      repoUrl: "https://github.com/C1ZC/camilo_zavala_herpm13051_s9", // URL del repositorio
      appUrl: "https://youtu.be/sz3H5cJS4yE", // URL de la aplicación
      skills: ['Kotlin', 'Android Studio','Java','SQLite','API']
    },
    {
      title: "Camilo Zavala HERPM13051 S5",
      description: "Aplicación Android desarrollada en Kotlin, incluye una pantalla inicial con animación y menú, un listado de vendedores y una funcionalidad de reproducción de audio al seleccionar un vendedor específico. También permite capturar y guardar fotos y visualizar un gráfico de ventas.",
      imgUrl: projImg4,
      repoUrl: "https://github.com/C1ZC/camilo_zavala_HERPM13051_s5", // URL del repositorio
      appUrl: "https://youtu.be/O6qlC0ZfX1Y?si=hPHghqF4CtwiJRIL", // URL de la aplicación
      skills: ['Kotlin', 'Android Studio','Java']
    },
    {
      title: "Camilo Zavala HERPM13051 S6",
      description: "Aplicación Android desarrollada en Kotlin, la aplicación permite registrar, modificar y listar infracciones en locales comerciales. Utiliza SQLite para el almacenamiento persistente de datos y facilita la compartición de información con otras aplicaciones.",
      imgUrl: projImg4,
      repoUrl: "https://github.com/C1ZC/camilo_zavala_HERPM13051_s6", // URL del repositorio
      appUrl: "https://www.youtube.com/watch?v=FaLr9l4oWjg", // URL de la aplicación
      skills: ['Kotlin', 'Android Studio','Java', 'SQLite']
    },
    {
      title: "Camilo Zavala HERPM13051 S7",
      description: "Aplicación Android desarrollada en Kotlin, la aplicación permite funcionalidades como obtención de días feriados desde una API pública, visualización de los datos en forma de lista, una pantalla de bienvenida (SplashScreen), y un sistema de autenticación que almacena las preferencias del usuario para mantener la sesión iniciada. Además, ofrece la opción de cerrar sesión con un solo clic.",
      imgUrl: projImg4,
      repoUrl: "https://github.com/C1ZC/camilo_zavala_HERPM13051_s7", // URL del repositorio
      appUrl: "https://youtu.be/NxfkyU2xynw", // URL de la aplicación
      skills: ['Kotlin', 'Android Studio','Java','API','ScreenSplash']
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