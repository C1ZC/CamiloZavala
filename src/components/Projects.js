import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
// import projImg4 from '../assets/img/project-img4.png';
// import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import projImg7 from '../assets/img/project-img7.png';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';
import projImg10 from '../assets/img/project-img10.png';
import projImg11 from '../assets/img/project-img11.png';
import projImg12 from '../assets/img/project-img12.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {

  const projects = [
    {
      title: "Pokémon App con Django y SQL Server (local)",
      description: "Aplicación web para gestionar tu colección Pokémon usando la PokeAPI. Incluye login, filtros, vistas responsivas con Bootstrap 5 y persistencia en SQL Server. Totalmente funcional con autenticación, paginación y diseño adaptable.",
      imgUrl: projImg12, // Reemplaza con la imagen correspondiente
      repoUrl: "https://github.com/C1ZC/web_project", // URL del repositorio
      appUrl: "https://web-project-newl.onrender.com/", // Puedes dejarlo vacío o poner una demo si tienes
      skills: ['Python', 'Django', 'SQL Server', 'Bootstrap 5', 'PokeAPI']
    },
    {
      title: "Chat Assistente",
      description: "Este es un proyecto chat assitente de token ChatGPT, con login y registro clasico, mas login y registro google conectado a un callback con supabase, base de datos usada en supabase, frontend es vue.js y el backend en python",
      imgUrl: projImg9,
      repoUrl: "https://youtu.be/H8E6JcF-_5U", // URL del repositorio
      appUrl: "https://youtu.be/S4m0CCRt2tA", // URL de la aplicación
      skills: ['Python', 'CSS', 'JavaScript','Vue,js','Supabase']
    },
    {
      title: "Lexia Demo",
      description: "Participe Full Stack en este proyecto Lexia para un cliente,  ya creado como base, se adaptó para su  empresa Lenguajes usados son Python en back-end,  Vue.js en front-end.",
      imgUrl: projImg8,
      repoUrl: "https://youtu.be/-4qU89dSH2A", // URL del repositorio
      appUrl: "https://youtu.be/FkuQClc1e5M", // URL de la aplicación
      skills: ['Python', 'CSS', 'JavaScript','Vue,js','PostgreSql']
    },

    {
      title: "Extractor de Datos de Clientes PDF",
      description: "Aplicación de escritorio para extraer datos de clientes desde facturas PDF y guardarlos en Excel. Desarrollada en Python con PyQt5, pdfplumber y openpyxl. Permite procesar múltiples archivos, corrige formatos de RUT y teléfono, y evita duplicados.",
      imgUrl: projImg10, // Puedes cambiar la imagen por una relacionada a tu app
      repoUrl: "https://github.com/C1ZC/lector_facturas", // URL del repositorio
      appUrl: "https://www.youtube.com/watch?v=6_T9MchPnqY", // No aplica para escritorio, puedes dejarlo vacío o poner el README
      skills: ['Python', 'PyQt5', 'pdfplumber', 'openpyxl', 'Automatización', 'Excel']
    },

    {
      title: "WhatsApp Mensajería desde Excel",
      description: "Aplicación de escritorio para envío masivo de mensajes de WhatsApp a contactos importados desde archivos Excel. Permite filtrar destinatarios, personalizar mensajes y llevar historial de envíos. Desarrollada en Python con PyQt y SQLite.",
      imgUrl: projImg11, // Puedes cambiar la imagen si tienes una captura de la app
      repoUrl: "https://github.com/C1ZC/lector_cartola_envia_wsp", // Cambia por la URL real de tu repositorio si la tienes
      appUrl: "", // No aplica para escritorio, puedes dejarlo vacío o poner un enlace a la documentación
      skills: ['Python', 'PyQt5', 'SQLite', 'Pandas', 'Excel', 'pywhatkit']
    },

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
      description: "Aplicación Android desarrollada en Kotlin, la aplicación permite registrar, eliminar y listar desde una API de productos. Además, utiliza SQLite para el almacenamiento persistente de datos, muestra un grafico con los 5 productos más vendidos.",
      imgUrl: projImg7,
      repoUrl: "https://github.com/C1ZC/camilo_zavala_herpm13051_s9", // URL del repositorio
      appUrl: "https://youtu.be/sz3H5cJS4yE", // URL de la aplicación
      skills: ['Kotlin', 'Android Studio','Java','SQLite','API']
    },
    // {
    //   title: "Camilo Zavala HERPM13051 S5",
    //   description: "Aplicación Android desarrollada en Kotlin, incluye una pantalla inicial con animación y menú, un listado de vendedores y una funcionalidad de reproducción de audio al seleccionar un vendedor específico. También permite capturar y guardar fotos y visualizar un gráfico de ventas.",
    //   imgUrl: projImg4,
    //   repoUrl: "https://github.com/C1ZC/camilo_zavala_HERPM13051_s5", // URL del repositorio
    //   appUrl: "https://youtu.be/O6qlC0ZfX1Y?si=hPHghqF4CtwiJRIL", // URL de la aplicación
    //   skills: ['Kotlin', 'Android Studio','Java']
    // },
    // {
    //   title: "Camilo Zavala HERPM13051 S6",
    //   description: "Aplicación Android desarrollada en Kotlin, la aplicación permite registrar, modificar y listar infracciones en locales comerciales. Utiliza SQLite para el almacenamiento persistente de datos y facilita la compartición de información con otras aplicaciones.",
    //   imgUrl: projImg5,
    //   repoUrl: "https://github.com/C1ZC/camilo_zavala_HERPM13051_s6", // URL del repositorio
    //   appUrl: "https://www.youtube.com/watch?v=FaLr9l4oWjg", // URL de la aplicación
    //   skills: ['Kotlin', 'Android Studio','Java', 'SQLite']
    // },
    {
      title: "Camilo Zavala HERPM13051 S7",
      description: "Aplicación Android desarrollada en Kotlin, la aplicación permite funcionalidades como obtención de días feriados desde una API pública, visualización de los datos en forma de lista, una pantalla de bienvenida (SplashScreen), y un sistema de autenticación que almacena las preferencias del usuario para mantener la sesión iniciada. Además, ofrece la opción de cerrar sesión con un solo clic.",
      imgUrl: projImg6,
      repoUrl: "https://github.com/C1ZC/camilo_zavala_HERPM13051_s7", // URL del repositorio
      appUrl: "https://youtu.be/NxfkyU2xynw", // URL de la aplicación
      skills: ['Kotlin', 'Android Studio','Java','API','ScreenSplash']
    }

  ];

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


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Proyectos</h2>
            <p>
              Esta sección muestra una selección de proyectos en los que he trabajado, abarcando diversas tecnologías y enfoques. Desde aplicaciones web hasta aplicaciones móviles, cada proyecto refleja mi compromiso con la calidad y la innovación. Explora los detalles de cada uno para conocer más sobre mi experiencia y habilidades.
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme project-carousel">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

export default Projects;