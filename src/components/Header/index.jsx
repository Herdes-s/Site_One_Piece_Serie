import styles from "./Header.module.css"

import logo from "../../assets/images/logo_onePiece.png"

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.overlay}></div>
            <img className={styles.logo} src={logo} alt="Logo_One_Piece"/>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/">Mapas</a>
                <a href="/">Procurados</a>
                <a href="/">Bandos</a>
                <a href="/">Mais informações</a>
            </nav>
        </header>
    );
}

export default Header;