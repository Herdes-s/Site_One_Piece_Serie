import styles from "./Intro.module.css";

import rogerImg from "../../assets/Images/roger.jpg";
import flag from "../../assets/Images/caveira_pirata.png";
import mapa from "../../assets/Images/mapa_descktop.jpg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <section className={styles.intro}>
      <div
        className={`${styles.darkScreen} ${startTransition ? styles.showDark : ""}`}
      ></div>
      <img
        src={flag}
        className={`${styles.flag} ${startTransition ? styles.showFlag : ""}`}
      />
      <div className={styles.overlay}></div>
      <div className={styles.intro_container}>
        <div className={styles.intro_box_title}>
          <h1 className={styles.intro_title}>
            <span>A GRANDE ERA DOS PIRATAS </span>
            <span className={styles.span}> COMEÇOU</span>
          </h1>
        </div>
        <img className={styles.intro_img} src={rogerImg} alt="" />
        <p className={styles.intro_citation}>
          "Minha fortuna? Se quiserem podem pegar... <br /> Procurem! Eu deixei
          tudo naquele lugar."
        </p>
        <button className={styles.intro_btn} onClick={handleEnter}>
          Entrar na Grande Era dos Piratas
        </button>
      </div>
      <img className={styles.back_bottom} src={mapa} />
    </section>
  );
}

export default Intro;
