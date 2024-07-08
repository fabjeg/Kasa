import montagne from "../assets/montagne.png";
import "../styles/Banner.scss";

function Banner() {
  return (
    <div className="container">
      <img
        className="mountain"
        src={montagne}
        alt="mountain"
      />
      <h1 className="title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}
export default Banner;
