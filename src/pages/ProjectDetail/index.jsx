import styles from "./ProjectDetail.module.css";
import "animate.css";

export default function ProjectDetail() {
  return (
    <div className={`${styles.page} animate__animated animate__fadeInUp`}>
      <h2 className={styles.title}>Detalhes do Projeto</h2>

      <div className={styles.card}>
        <p>
          O backend ainda não implementou os endpoints de projeto.
          Assim que estiver pronto, conectaremos todos os dados reais aqui.
        </p>
      </div>
    </div>
  );
}
