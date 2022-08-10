import { Routes, Route } from "react-router-dom";

import { Article, Home } from "../components/pages";

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/article" element={<Article />} />
  </Routes>
);
