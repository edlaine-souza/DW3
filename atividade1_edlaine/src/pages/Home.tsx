import React, { useContext } from "react";
import { Contexto } from "../contexts/Contexto";
import MegaSena from "../components/MegaSena";
import Loading from "../components/Loading";
import Lotofacil from "../components/LotoFacil";


const Home = () => {
  const { megasena, lotofacil } = useContext(Contexto);

  if (!megasena.dezenas || !lotofacil.dezenas) {
    return <Loading />;
  }

  return (
    <div className="home">
      <div className="lottery-grid">
        <MegaSena data={megasena} />
        <Lotofacil data={lotofacil} />
      </div>
    </div>
  );
};

export default Home;