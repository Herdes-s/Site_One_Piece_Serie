import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Maps from "../../components/Maps";
import Posters from "../../components/Posters";

import styles from "./Home.module.css";

function Home() {

  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <Maps />
      <Posters />
    </div>
  );
}

export default Home;
