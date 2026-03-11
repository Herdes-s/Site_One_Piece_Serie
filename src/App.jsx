import { Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro/Intro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}

export default App;