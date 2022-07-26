import { Routes, Route } from "react-router-dom";
import { Header } from "../components";

import { Home } from "../components/pages";

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<p>Sobre</p>} />
    <Route path="/trabalhe-conosco" element={<p>trabalhe conosco</p>} />
  </Routes>
);
