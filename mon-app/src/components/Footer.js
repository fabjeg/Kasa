import "../styles/footer.scss";
import Logo_footer from "../assets/logo_kasa_footer.png";
import Text_footer from "../assets/text_footer.png";
import Text_footer_2 from "../assets/logo-2.png";

export function Footer() {
  return (
    <div className="container-footer">
      <img
        className="logo"
        src={Logo_footer}
        alt="logo"
      />
      <img
        className="text"
        src={Text_footer}
        alt="text"
      />
      <img
        className="text-2"
        src={Text_footer_2}
        alt="text"
      />
    </div>
  );
}
