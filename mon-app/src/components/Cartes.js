import "../styles/Cartes.scss";
import { Apartment } from "../components";
import ListData from "../datas/liste.json";
import { Link } from "react-router-dom";

export function Cartes() {
  return (
    <div className="apartment-container">
      <ul className="container-cartes">
        {ListData.map((item) => (
          <li>
            <Link
              to={`/Fiche-Logement/${item.id}`}
              key={item.id}
            >
              <Apartment data={item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
