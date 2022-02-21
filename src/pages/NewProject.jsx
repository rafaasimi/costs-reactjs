import ProjectForm from '../components/form/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <>
            <div className={styles.newProjectContainer}>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços.</p>
            
                <ProjectForm buttonText="Criar Projeto"/>
            </div>
        </>
    )
}

export default NewProject