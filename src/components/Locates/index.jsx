import styles from "./Locates.module.css";

import baratie from "../../assets/images/Locais/Baratie.jpg";
import Cactus from "../../assets/images/Locais/Cactus_island.webp";

function Locates() {
  return (
    <section className={styles.sectionLocates}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h2>Locais</h2>
        <div className={styles.locates}>
          <h3>Baratie</h3>
          <div className={styles.info}>
            <img src={baratie} alt="" />
            <p>
              Baratie é um Restaurante que fica em alto mar, na região de Sambas
              no East Blue, e foi fundado e é dirigido por Zeff, um antigo
              pirata.
            </p>
          </div>
        </div>
        <div className={styles.locates}>
          <h3>Ilha dos Cactos</h3>
          <div className={styles.info}>
            <img src={Cactus} alt="" />
            <p>A Ilha Cactus é uma ilha no Paraíso com várias montanhas em forma de cactos, com os "espinhos" sendo lápides.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locates;
