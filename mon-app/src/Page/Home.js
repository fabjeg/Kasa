import { Main, Cartes, Banner } from "../components";
import montagne from "../assets/montagne.png";

export function Home() {
  return (
    <Main>
      <Banner
        image={montagne}
        description={"Chez vous,\n partout et ailleurs"}
      />
      <Cartes />
    </Main>
  );
}
