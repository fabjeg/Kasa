import React from "react";
import "../styles/Error.scss";
import { NavLink } from "react-router-dom";

export function Error() {
  return (
    <div className="error">
      <h3>404</h3>
      <p>
        Oups! La page que
        <br /> vous demandez n'existe pas.
      </p>
      <NavLink
        to={"/"}
        className="link-error"
      >
        Retour à la page d'accueil
      </NavLink>
    </div>
  );
}
