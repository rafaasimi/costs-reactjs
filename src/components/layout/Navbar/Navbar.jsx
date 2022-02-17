import { Link } from "react-router-dom";
import Container from "../Container/Container.jsx";

import styles from "./Navbar.module.css";
import logoImg from "../../../assets/costs-logo.svg";

function Navbar() {
  return (
    <>
      <div className={styles.header}>
        <Container>
          <Link to="/" className={styles.logo}>
            <img src={logoImg} alt="Costs" />
          </Link>
          <ul className={styles.navbar}>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/company">Empresa</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
