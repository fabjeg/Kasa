import "../styles/App.scss";
import logo from "../assets/logo.png";
import Single from "../Page/Apropos";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link />,
    children: [
      {
        path: "Accueil",
        element: (
          <div>
            Accueil
            <nav>
              <NavLink to="/Accueil">Accueil</NavLink>
              <NavLink to="/A propos">A propos</NavLink>
            </nav>
          </div>
        ),
      },
      {
        path: "Apropos",
        element: (
          <div>
            A propos
            <nav>
              <NavLink to="/Accueil">Accueil</NavLink>
              <NavLink to="/Apropos">A propos</NavLink>
            </nav>
          </div>
        ),
      },
      {
        path: "/Apropos/:id",
        element: <Single />,
      },
    ],
  },
]);

function Link() {
  return (
    <>
      <header className="link">
        <NavLink to="/Accueil">Accueil</NavLink>
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
