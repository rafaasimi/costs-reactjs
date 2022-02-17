import styles from './Loader.module.css'
import loaderImg from "../../../assets/loading.png";

function Loader() {
  return (
    <>
      <div className={styles.loader}>
        <img src={loaderImg} alt="Carregando..." />
      </div>
    </>
  );
}

export default Loader;
