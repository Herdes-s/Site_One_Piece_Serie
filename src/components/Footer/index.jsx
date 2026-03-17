import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>
      <div className={styles.identity}>
        <h2>Grande Era dos Piratas</h2>
      </div>
      <div className={styles.nav}>
        <a href="/">Home</a>
        <a href="/">Mapas</a>
        <a href="/">Procurados</a>
        <a href="/">Bandos</a>
        <a href="/">Mais informações</a>
      </div>
      <div className={styles.credits}>
        <h3>
          Projeto React inspirado na série One Piece Desenvolvido por Ernand
          Soares
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
