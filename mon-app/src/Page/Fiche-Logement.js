/* eslint-disable jsx-a11y/img-redundant-alt */
import { Header, Footer, Collapse } from "../components";
import { Carousel } from "./Carousel";
import ListData from "../datas/liste.json";
import { useParams } from "react-router-dom";
import "../styles/FicheLogement.scss";

const findList = (id) => {
  return ListData.find((liste) => liste.id === id);
};
const renderStars = (rating) => {
  const totalStars = 5;
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        if (index < rating) {
          return <i key={index} className="fa-solid fa-star filled-star"></i>;
        }
        return <i key={index} className="fa-solid fa-star empty-star"></i>;
      })}
    </div>
  );
};

const renderTags = (tags) => {
  return tags.map((tag, index) => (
    <div key={index} className="tag">
      {tag.split(" ").map((equipment, index) => (
        <span key={index} className="tag-equipment">
          {equipment}
        </span>
      ))}
    </div>
  ));
};

export function FicheLogement() {
  const { id } = useParams();
  const liste = findList(id);

  return (
    <div>
      <Header />
      <Carousel />
      <div className="container-fiche">
        <figcaption className="name">
          <article>
            <h3 className="title-fl">{liste.title}</h3>
            <p className="location">{liste.location}</p>
            <div className="tags">{renderTags(liste.tags)}</div>
          </article>
        </figcaption>
        <section className="img-info">
          <figure>
            <img
              className="image-host"
              src={liste.host.picture}
              alt={`Photo de profil de ${liste.host.name}`}
            />
            {liste.host.name}
          </figure>
          <div className="rating">{renderStars(liste.rating)}</div>
        </section>
      </div>
      <div className="container-collapses">
        <div className="collapses">
          <Collapse label="Description" content={liste.description} />
          <Collapse
            label="Équipement"
            content={liste.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
