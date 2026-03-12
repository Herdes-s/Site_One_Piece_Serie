import styles from "./Header.module.css"

import logo from "../../assets/images/logo_onePiece.png"

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.overlay}></div>
            <img className={styles.logo} src={logo} alt="Logo_One_Piece"/>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/">Tripulações</a>
                <a href="/">Akuma no Mi</a>
                <a href="/">Ilhas</a>
                <a href="/">Procurados</a>
            </nav>
        </header>
    );
}

export default Header;