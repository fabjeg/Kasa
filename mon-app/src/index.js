import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.scss";
import { About, Home, Error, FicheLogement } from "./Page";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/kasa"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<Error />}
        />
        <Route
          path="Fiche-Logement/:id"
          element={<FicheLogement />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
