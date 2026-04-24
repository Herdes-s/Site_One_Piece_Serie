import Header from "../Header";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="Hero">
        <Header />
        <div className={styles.overlay}></div>
        <h2>Tudo começou com as palavras de um homem...</h2>
        <p>"A riqueza, fama e poder..."</p>
        <button className={styles.btn}>Explorar o Mundo</button>
      </section>
  );
}

export default Hero;
