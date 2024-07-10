import "../styles/Cartes.scss";
import Apartment from "../components/Apartment";
import ListData from "../datas/liste.json";

function Cartes() {
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

export default Cartes;
