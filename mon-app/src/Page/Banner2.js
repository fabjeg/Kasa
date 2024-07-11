import mountain from "../assets/Mountain_ranges.png";
import "../styles/Banner.scss";

export function Banner2() {
  return (
    <div className="container">
      <img
        className="mountain"
        src={mountain}
        alt="mountain"
      />
    </div>
  );
}
