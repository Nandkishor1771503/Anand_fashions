import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Shirts from "./components/Shirts.jsx";
import Jackets from "./components/Jackets.jsx";
import Hoodies from "./components/Hoodies.jsx";
import Pants from "./components/Pants.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/shirts" element={<Shirts />}/>
        <Route path="/pants" element={<Pants />}/>
        <Route path="/hoodies" element={<Hoodies />}/>
        <Route path="/jackets" element={<Jackets />}/>
      </Routes>
    </Router>
  </StrictMode>
);
