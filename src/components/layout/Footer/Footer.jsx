import { FaLinkedin, FaGithub, FaGlobeAmericas } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        
      <div className={styles.socials}>
        <a href="https://rafaelsimionato.dev/" target="_new">
          <FaGlobeAmericas />
        </a>
        <a href="https://www.linkedin.com/in/rafaelzorzenon/" target="_new">
          <FaLinkedin />
        </a>
        <a href="https://github.com/rafaasimi" target="_new">
          <FaGithub />
        </a>
      </div>

      <div>
        <p>Desenvolvido por: Rafael Simionato</p>
      </div>
    </footer>
  );
}

export default Footer;
