import styles from './Loading.module.css'
import loaderImg from "../../../assets/loading.png";

function Loading() {
  return (
    <>
      <div className={styles.loadingContainer}>
        <img src={loaderImg} alt="Carregando..." />
      </div>
    </>
  );
}

export default Loading;
