import styles from "./Maps.module.css";

import eastBlue from "../../assets/Images/eastBlue.jpg";
import grandLine from "../../assets/Images/grandLine.webp";

function Maps() {
  return (
    <section className={styles.maps} id="Maps">
      <div className={styles.screen}>
        <div className={styles.center}>
          <div className={styles.title}>
            <h2>Os Mares do Mundo</h2>
          </div>
        </div>
        <div className={styles.maps_grid}>
          <div className={styles.maps_map}>
            <div className={styles.subTitle}>
              <h3>EAST BLUE</h3>
            </div>
            <img
              className={styles.map_img}
              src={eastBlue}
              alt="mapa do East Blue"
            />
            <div className={styles.description}>
              <p>
                O East Blue é o oceano que constitui a parte leste do Mar Azul,
                dividido pela Red Line e pela Grand Line . É separado do North
                Blue pela Red Line e do South Blue pela metade Paradise da Grand
                Line.
              </p>
            </div>
          </div>
          <div className={styles.maps_map}>
            <div className={styles.subTitle}>
              <h3>GRAND LINE</h3>
            </div>
            <img
              className={styles.map_img}
              src={grandLine}
              alt="mapa da Grand Line"
            />
            <div className={styles.description}>
              <p>
                A Grand Line é a corrente oceânica que está cercada pelos Calm
                Belts e segue uma linha imaginária que vai do noroeste ao sudeste
                através do meio do mundo e perpendicular à Red Line. A Red Line é
                um vasto continente que circunda o globo a partir de nordeste para
                sudoeste. Estas duas linhas dividem o resto do Mar em: North Blue,
                East Blue, West Blue e South Blue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a className={styles.up} href="#Hero">
      </a>
    </section>
  );
}

export default Maps;
