// import { useParams } from "react-router-dom";
import { Collapse, Banner } from "../components";
import { Container } from "./Container";
import mountain from "../assets/Mountain_ranges.png";

export function About() {
  const aboutData = [
    {
      label: "Fiabilité",
      content:
        " Les annonces postées sur Kasa garantissent une fiabilité totale. Les  photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      label: "Respect",
      content:
        " La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      label: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      label: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div>
      <Banner image={mountain} />
      <Container>
        {aboutData.map(({ label, content }, index) => (
          <Collapse
            key={index}
            label={label}
            content={content}
          />
        ))}
      </Container>
    </div>
  );
}
