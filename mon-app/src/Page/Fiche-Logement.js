/* eslint-disable jsx-a11y/img-redundant-alt */
import { Collapse, Carousel, Tags, Rating } from "../components";
import ListData from "../datas/liste.json";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "../styles/FicheLogement.scss";

const findList = (id) => {
  return ListData.find((liste) => liste.id === id);
};

export function FicheLogement() {
  const { id } = useParams();
  const liste = findList(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!liste) {
      navigate("/erreur");
    }
  }, [liste, navigate]);

  if (!liste) {
    return null;
  }

  return (
    <div>
      <Carousel />
      <div className="container-fiche">
        <figcaption className="name">
          <article>
            <h3 className="title-fl">{liste.title}</h3>
            <p className="location">{liste.location}</p>
            <Tags tags={liste.tags} />
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
          <Rating rating={liste.rating} />
        </section>
      </div>
      <div className="container-collapses">
        <div className="collapses">
          <Collapse
            label="Description"
            content={liste.description}
          />
          <Collapse
            label="Équipement"
            content={liste.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          />
        </div>
      </div>
    </div>
  );
}
