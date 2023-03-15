import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import FicheLogement from "./pages/FicheLogement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fichelogement" element={<FicheLogement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
