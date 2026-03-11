import styles from "./Intro.module.css";
import rogerImg from "../../assets/images/roger.jpg";

function Intro() {
  return (
    <section className={styles.sectionIntro}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1>A GRANDE ERA DOS PIRATAS COMEÇOU…</h1>
        <img src={rogerImg} alt="" />
        <p>
          "Minha fortuna? Se quiserem podem pegar... <br /> Procurem! Eu deixei tudo
          naquele lugar."
        </p>
        <button>Entrar na Grande Era dos Piratas</button>
      </div>
    </section>
  );
}

export default Intro;
