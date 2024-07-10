import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.scss";
import App from "../src/components/App";
import Banner from "../src/components/Banner";
import Cartes from "../src/components/Cartes";
import Main from "../src/components/Main.js";
import Footer from "../src/components/footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Main>
      <Banner />
      <Cartes />
    </Main>
    <Footer />
  </React.StrictMode>
);
