import "../styles/Apartment.scss";

export function Apartment({ data }) {
  return (
    <div className="apartment">
      <img
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
