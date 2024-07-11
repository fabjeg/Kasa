import { Header, Footer, Main, Cartes, Banner } from "../components";

export function Home() {
  return (
    <div>
      <Main>
        <Header />
        <Banner />
        <Cartes />
        <Footer />
      </Main>
    </div>
  );
}
