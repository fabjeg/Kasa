import "../styles/App.scss";
import logo from "../assets/logo.png";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link />,
    children: [
      {
        path: "contact",
        element: <div>Accueil</div>,
      },
      {
        path: "Apropos",
        element: <div>A propos</div>,
      },
    ],
  },
]);

function Link() {
  return (
    <>
      <header className="link">
        <NavLink to="/contact">Accueil</NavLink>
        <NavLink
          to="/Apropos"
          className="active"
        >
          A propos
        </NavLink>
      </header>
    </>
  );
}

function App() {
  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="logo"
        />
        <div>
          <RouterProvider router={router} />
        </div>
      </header>
    </>
  );
}

export default App;
