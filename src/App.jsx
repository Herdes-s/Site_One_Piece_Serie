import { Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;