import styles from "./Wanted.module.css";

import wanted from "../../data/Wanted";

function Wanted() {
  return (
    <section className={styles.Wanted} id="Wanted">
      <div className={styles.overlay}></div>
      <div className={styles.screen}>
        <div className={styles.center}>
          <div className={styles.title}>
            <h2>Procurados</h2>
          </div>
        </div>
        <div className={styles.container_grid}>
          {wanted.map((persona) => (
            <div className={styles.poster}>
              <img
                className={styles.poster_img}
                id={persona.id}
                src={persona.image}
                alt="imagem procurado"
              />
            </div>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}

export default Wanted;
