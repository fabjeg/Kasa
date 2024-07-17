import { useNavigate } from "react-router-dom";
import "../styles/Apartment.scss";

export function Apartment({ data }) {
  const Navigate = useNavigate();
  const imageClick = () => {
    console.log("clique", data);
    Navigate("/Fiche-Logement");
  };

  return (
    <div className="apartment">
      <img
        onClick={imageClick}
        src={data.cover}
        alt={data.title}
        className="apartment-cover"
      />

      <div className="text-overlay">
        <h2>{data.title}</h2>
      </div>
    </div>
  );
}
