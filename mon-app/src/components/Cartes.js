import "../styles/Cartes.scss";
import { Apartment } from "../components";
import ListData from "../datas/liste.json";

export function Cartes() {
  return (
    <div className="apartment-container">
      <ul className="container-cartes">
        {ListData.map((item) => (
          <li key={item.id}>
            <Apartment data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
