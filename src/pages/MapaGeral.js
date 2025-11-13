import React from "react";
import { Link } from "react-router-dom";
import "./MapaGeral.css";
import mapaImg from "../assets/mapa-ifs.png"; // troque o nome conforme o seu arquivo real

function MapaGeral() {
  return (
    <div className="mapa-geral-container">
      <h1>Mapa Geral</h1>

      <div className="mapa-area">
        <img src={mapaImg} alt="Mapa do IFS" className="mapa-img" />

        <div className="legenda">
          <h3>Blocos e Setores</h3>
          <ul>
            <li><Link to="/bloco1">Bloco 1</Link></li>
            <li><Link to="/bloco2">Bloco 2</Link></li>
            <li><Link to="/bloco3">Bloco 3</Link></li>
            <li><Link to="/bloco4">Bloco 4</Link></li>
            <li><Link to="/corredor-oeste">Corredor Oeste</Link></li>
            <li><Link to="/corredor-central">Corredor Central</Link></li>
            <li><Link to="/corredor-leste">Corredor Leste</Link></li>
            <li><Link to="/vivencia">Vivência</Link></li>
            <li><Link to="/coinf">Coinf</Link></li>
            <li><Link to="/arquitetura">Arquitetura</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MapaGeral;