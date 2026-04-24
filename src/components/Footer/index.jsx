import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="Footer">
      <div className={styles.overlay}></div>
      <div className={styles.screen}>
        <div className={styles.title}>
          <h2>Grande Era Dos Piratas</h2>
        </div>
        <nav className={styles.footer_nav}>
          <a href="/">Home</a>
          <a href="/">Mapas</a>
          <a href="/">Procurados</a>
          <a href="/">Bandos</a>
          <a href="/">Mais informações</a>
        </nav>
        <p className={styles.copy}>© Desenvolvido por Ernand inspirado em One Piece</p>
      </div>
    </footer>
  );
}

export default Footer;
