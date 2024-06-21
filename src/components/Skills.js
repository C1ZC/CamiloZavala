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

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
/**import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";**/
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Habilidades y tecnologias adquiridas con pequeños proyectos<br></br>A traves de trabajos personales y academicos.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter7} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="CSS3" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Phyton" />
                                <h5>Phyton</h5>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Android Studio" />
                                <h5>Android Studio</h5>
                            </div>
                            <div className="item">
                                <img src={meter15} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="PHP" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Postman" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={meter16} alt="Spring Boot" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Figma" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="GitHub" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Git" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Visual Studio Code" />
                                <h5>Visual Studio Code</h5>
                            </div>
                            <div className="item">
                                <img src={meter17} alt="Cpanel" />
                                <h5>Cpanel</h5>
                            </div>
                            <div className="item">
                                <img src={meter18} alt="Cloudflare" />
                                <h5>Cloudflare</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Images" />
    </section>
  )
}
