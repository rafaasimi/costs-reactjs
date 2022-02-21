import styles from './Home.module.css'
import dashboardImg from '../assets/dashboard.svg'
import LinkButton from '../components/layout/LinkButton/LinkButton'

function Home() {
    return (
        <>
            <section className={styles.homeContainer}>
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/new-project" text="Criar Projeto" />
                <img src={dashboardImg} alt="Costs" />
            </section>
        </>
    )
}

export default Home