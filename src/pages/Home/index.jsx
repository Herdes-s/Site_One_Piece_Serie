import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Location from "../../Components/Location";
import Maps from "../../Components/Maps";
import Wanted from "../../Components/Wanted";

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
