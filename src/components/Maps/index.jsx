import  styles from "./Maps.module.css" 

import mapEastBlue from "../../assets/images/East_Blue_Map.webp"
import mapGrandLine from "../../assets/images/Grand_Line_Map.webp"

function Maps() {
    return(
        <section className={styles.sectionMaps}>
            <div className={styles.overlay}></div>
            <div className={styles.maps}>
                <h2>Os Mares do Mundo</h2>
                <div className={styles.map}>
                    <h3>East Blue</h3>
                    <img src={mapEastBlue} alt="Mapa_do_East_Blue" />
                    <p>O East Blue é o oceano que constitui a parte leste do Mar Azul, dividido pela Red Line e pela Grand Line . É separado do North Blue pela Red Line e do South Blue pela metade Paradise da Grand Line.</p>
                </div>
                <div className={styles.map}>
                    <h3>Grand Line</h3>
                    <img src={mapGrandLine} alt="Mapa_do_East_Blue" />
                    <p>A Grand Line é a corrente oceânica que está cercada pelos Calm Belts e segue uma linha imaginária que vai do noroeste ao sudeste através do meio do mundo e perpendicular à Red Line. A Red Line é um vasto continente que circunda o globo a partir de nordeste para sudoeste. Estas duas linhas dividem o resto do Mar em: North Blue, East Blue, West Blue e South Blue.</p>
                </div>
            </div>
        </section>
    )
}

export default Maps;