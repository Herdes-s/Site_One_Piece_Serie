import Header from "../../components/Header";
import Hero from "../../components/Hero";
import styles from "./Home.module.css";

function Home() {

  return (
    <div className={styles.main}>
      <Header />
      <Hero />
    </div>
  );
}

export default Home;
