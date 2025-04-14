import React from "react";
import { Props } from "../types";
import trevoLotofacil from "../assets/trevo-lotofacil.png";
import "./LotoFacil.css";

interface LotofacilProps {
  data: Props;
}

const Lotofacil: React.FC<LotofacilProps> = ({ data }) => {
  return (
    <div className="lottery-container lotofacil">
      <img src={trevoLotofacil} alt="Trevo Lotofacil" />
      <h2 className="title">Lotofácil</h2>
      <p className="date">{data.dataPorExtenso}</p>
      <p className="concurso">Concurso: {data.numeroDoConcurso}</p>
      <p className="winners">Ganhadores: {data.quantidadeGanhadores}</p>
      <div className="numbers">
        {data.dezenas.map((dezena, index) => (
          <span key={index} className="number">{dezena}</span>
        ))}
      </div>
    </div>
  );
};

export default Lotofacil;
