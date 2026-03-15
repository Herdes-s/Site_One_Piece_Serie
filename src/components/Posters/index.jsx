import styles from "./Posters.module.css";

import wanted from "../../data/Wanted";

function Posters() {
  return (
    <section className={styles.sectionPosters}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h2>Procurados</h2>
        <div className={styles.cards}>
          {wanted.map((poster) => (
            <div key={poster.id} className={styles.card}>
              <img src={poster.image} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Posters;
