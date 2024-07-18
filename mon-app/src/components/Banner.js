import "../styles/Banner.scss";
export function Banner({ image, description }) {
  return (
    <div className="container">
      <img className="mountain" src={image} alt="mountain" />
      {description?.length > 0 && <h1 className="title">{description}</h1>}
    </div>
  );
}
