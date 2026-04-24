import styles from "./Location.module.css";

import baratie from "../../assets/Images/Locais/Baratie.jpg";
import ilhaDosCactos from "../../assets/Images/Locais/Cactus_Island.jpg";

function Location() {
  return (
    <section className={styles.location} id="Location">
      <div className={styles.overlay}></div>
      <div className={styles.screen}>
        <div className={styles.center}>
          <div className={styles.title}>
            <h2>Locais</h2>
          </div>
        </div>
        <div className={styles.location_grid}>
          <div className={styles.card_location}>
            <div className={styles.subtitle_location}>
              <h3>Baratie</h3>
            </div>
            <img className={styles.img_location} src={baratie} alt="" />
            <div className={styles.description_location}>
              <p>
                Baratie é um Restaurante que fica em alto mar, na região de Sambas
                no East Blue, e foi fundado e é dirigido por Zeff, um antigo
                pirata.
              </p>
            </div>
          </div>
          <div className={styles.card_location}>
            <div className={styles.subtitle_location}>
              <h3>Ilha dos Cactos</h3>
            </div>
            <img className={styles.img_location} src={ilhaDosCactos} alt="" />
            <div className={styles.description_location}>
              <p>
                A Ilha Cactus é uma ilha no Paraíso com várias montanhas em forma
                de cactos, com os "espinhos" sendo lápides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
