import "../styles/App.scss";
import logo from "../assets/logo.png";
import montagne from "../assets/montagne.png";
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
      <main>
        <div className="container">
          <img
            className="mountain"
            src={montagne}
            alt="mountain"
          />
          <h1 className="test2">Chez vous, partout et ailleurs</h1>
        </div>
      </main>
    </>
  );
}

export default App;
