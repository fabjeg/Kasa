import "../styles/App.scss";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="logo"
      />
      <div className="link ">
        <NavLink
          to={"/"}
          className="active "
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/about"}
          className="active"
        >
          A propos
        </NavLink>
      </div>
    </header>
  );
}
