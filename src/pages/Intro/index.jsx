import styles from "./Intro.module.css";
import rogerImg from "../../assets/images/roger.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import flag from "../../assets/images/caveira_pirata.png";

function Intro() {
  const navigate = useNavigate("");
  const [startTransition, setStartTransition] = useState(false);

  function handleEnter() {

    setStartTransition(true);

    setTimeout(() => {

      navigate("/home");
    }, 1200);

  }

  return (
    <section className={styles.sectionIntro}>

      <div className={`${styles.darkScreen} ${startTransition ? styles.showDark : ""}`}></div>

      <img src={flag} className={`${styles.flag} ${startTransition ? styles.showFlag : ""}`} />

      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1>A GRANDE ERA DOS PIRATAS COMEÇOU…</h1>
        <img src={rogerImg} alt="" />
        <p>
          "Minha fortuna? Se quiserem podem pegar... <br /> Procurem! Eu deixei
          tudo naquele lugar."
        </p>
        <button onClick={handleEnter}>Entrar na Grande Era dos Piratas</button>
      </div>
    </section>
  );
}

export default Intro;
