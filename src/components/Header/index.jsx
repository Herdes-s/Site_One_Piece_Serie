import styles from "./Header.module.css";

import logo from "../../assets/Images/logo_onePiece.png";
import menu from "../../assets/Icons/menu.svg";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <img className={styles.header_logo} src={logo} alt="logo One Piece" />
      <nav className={`${styles.header_nav} ${open ? styles.open : ""}`}>
        <a href="#Hero" onClick={() => setOpen(false)}>
          <div className={styles.nav_box}>Home</div>
        </a>
        <a href="#Maps" onClick={() => setOpen(false)}>
          <div className={styles.nav_box}>Mapas</div>
        </a>
        <a href="#Wanted" onClick={() => setOpen(false)}>
          <div className={styles.nav_box}>Procurados</div>
        </a>
        <a href="#Location" onClick={() => setOpen(false)}>
          <div className={styles.nav_box}>Locais</div>
        </a>
        <a href="#Footer" onClick={() => setOpen(false)}>
          <div className={styles.nav_box}>Mais informações</div>
        </a>
      </nav>
      <div className={styles.header_menuBox} onClick={() => setOpen(!open)}>
        <img className={styles.header_menu} src={menu} alt="menu mobile" />
      </div>
    </header>
  );
}

export default Header;
