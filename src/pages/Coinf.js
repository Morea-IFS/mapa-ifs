import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/bloco1_inferior.png";
import mapaSuperior from "../assets/mapas/bloco1_superior.png";

function Coinf() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Coinf</h1>
      <p className="page-description">
        Coordenação de informática (Coinf) — abriga a <b>Sala 11</b>, <b>Morea</b>, <b>Laboratórios de Informática 1 a 6</b>, <b>Laboratório de redes</b>,
        <b>?</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior da Coinf" className="map-image" />
        <div className="legend">
          <p><b>Morea</b> Laboratório de Monitoramento de redes academicas</p>
          <p><b>Sala 11</b> Sala de aula</p>
          <p><b>?</b> -----</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior da Coinf" className="map-image" />
        <div className="legend">
          <p><b>Laboratórios de Informática 1 a 6</b> Locais de estudo com computadores</p>
          <p><b>Laboratório de redes</b> Local de estudo com notebooks</p>
          <p><b>?</b> -----</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Coinf;
