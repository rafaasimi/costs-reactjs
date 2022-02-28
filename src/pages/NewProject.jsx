import { useNavigate } from "react-router-dom";

import ProjectForm from "../components/form/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        
        project.cost = 0;
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((response) => {
            response.json()
        })
        .then((data) => {
            console.log(data);
            navigate('/projects', {
                message:"Projeto criado com sucesso!"
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <>
      <div className={styles.newProjectContainer}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços.</p>

        <ProjectForm buttonText="Criar Projeto" handleSubmit={createPost}/>
      </div>
    </>
  );
}

export default NewProject;
