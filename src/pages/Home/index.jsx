import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Location from "../../components/Location";
import Maps from "../../components/Maps";
import Wanted from "../../components/Wanted";

function Home() {
  return (
    <main>
      <Hero />
      <Maps />
      <Wanted />
      <Location />
      <Footer />
    </main>
  );
}

export default Home;
