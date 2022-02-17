import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/new-project">Novo Projeto</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
