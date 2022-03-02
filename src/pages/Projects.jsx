import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../components/layout/Message/Message";
import Container from "../components/layout/Container/Container";
import LinkButton from "../components/layout/LinkButton/LinkButton";
import ProjectCard from "../components/project/ProjectCard";

import styles from "./Projects.module.css";
import Loading from "../components/layout/Loading/Loading";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => console.log(error))

  }, []);


  function handleRemoveProject(id) {

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjectMessage('Projeto removido com sucesso.')
    })
    .catch(error => console.log(error))

  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/new-project" text="Criar Projeto" />
      </div>
      {message && <Message message={message} type="success" />}
      {projectMessage && <Message message={projectMessage} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={handleRemoveProject}
            />
          ))}
        {loading && <Loading />}
        {!loading && projects.length === 0 && (
          <p>Não há projetos cadastrados.</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
