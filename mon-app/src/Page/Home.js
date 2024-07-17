import { Header, Footer, Main, Cartes, Banner } from "../components";
import montagne from "../assets/montagne.png";

export function Home() {
  return (
    <div>
      <Main>
        <Header />
        <Banner
          image={montagne}
          description={"Chez vous, partout et ailleurs"}
        />
        <Cartes />
        <Footer />
      </Main>
    </div>
  );
}
