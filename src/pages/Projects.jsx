import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../components/layout/Message/Message";
import Container from "../components/layout/Container/Container";
import LinkButton from "../components/layout/LinkButton/LinkButton";
import ProjectCard from "../components/project/ProjectCard";

import styles from "./Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {

    fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setProjects(data)
    })
    .catch((error) => console.log(error))

}, [])

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/new-project" text="Criar Projeto" />
      </div>
      {message && <Message message={message} type="success" />}
      <Container customClass="start">
        {projects.length > 0 && 
            projects.map((project) => (
                <ProjectCard
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                />
            ))
        }
      </Container>
    </div>
  );
}

export default Projects;
