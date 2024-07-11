import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.scss";
import { About, Home, Error } from "./Page";

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
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
