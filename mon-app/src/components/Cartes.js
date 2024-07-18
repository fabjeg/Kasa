import "../styles/Cartes.scss";
import { Apartment } from "../components";
import ListData from "../datas/liste.json";
import { Link } from "react-router-dom";

export function Cartes() {
  return (
    <div className="apartment-container">
      <ul className="container-cartes">
        {ListData.map((item, index) => (
          <li key={index}>
            <Link to={`/Fiche-Logement/${item.id}`} key={item.id}>
              <Apartment data={item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
