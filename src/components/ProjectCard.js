import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoUrl, appUrl, }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br /><br />
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <button type="button" class="btn btn-outline-dark">Repositorio</button>
          </a>
          <a href={appUrl} target="_blank" rel="noopener noreferrer">
            <button type="button" class="btn btn-outline-dark">Visualizar App</button>
          </a>
        </div>
      </div>
    </Col>
  )
}