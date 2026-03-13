import  styles from "./Maps.module.css" 

import mapEastBlue from "../../assets/images/East_Blue_Map.webp"

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
            </div>
        </section>
    )
}

export default Maps;