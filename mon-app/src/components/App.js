import "../styles/App.scss";
import logo from "../assets/logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <img
            src={logo}
            alt="logo"
          />
          <div className="liens">
            <a
              href="#"
              className="acceuil"
            >
              accueil
            </a>
            <a
              href="#"
              className="apropos"
            >
              A propos
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
