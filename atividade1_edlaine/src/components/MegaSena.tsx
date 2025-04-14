import React from "react";
import { Props } from "../types";
import trevoMegasena from "../assets/trevo-megasena.png";
import "./MegaSena.css";

interface MegaSenaProps {
  data: Props;
}

const MegaSena: React.FC<MegaSenaProps> = ({ data }) => {
  return (
    <div className="lottery-container megasena">
      <img src={trevoMegasena} alt="Trevo MegaSena" />
      <h2 className="title">Mega-Sena</h2>
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

export default MegaSena;
