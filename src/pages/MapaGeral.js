import React from "react";
import { Link } from "react-router-dom";
import "./MapaGeral.css";
import mapaImg from "../assets/mapa_geral.png";

function MapaGeral() {
  return (
    <div className="mapa-geral-container">
      <h1>Mapa Geral</h1>

      <div className="mapa-area">
        <img src={mapaImg} alt="Mapa do IFS" className="mapa-img" />

        <div className="legenda">
          <h3>Blocos e Setores</h3>
          <ul>
            <li><Link to="/blocoA">Bloco A</Link></li>
            <li><Link to="/blocoB">Bloco B</Link></li>
            <li><Link to="/blocoC">Bloco C</Link></li>
            <li><Link to="/blocoD">Bloco D</Link></li>
            <li><Link to="/blocoE">Bloco E</Link></li>
            <li><Link to="/blocoFG">Bloco FG</Link></li>
            <li><Link to="/blocoH">Bloco H</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MapaGeral;