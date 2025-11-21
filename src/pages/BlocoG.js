import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/blocoG_inferior.png";
import mapaSuperior from "../assets/mapas/blocoG_superior.png";

function BlocoG() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Blocos F e G</h1>
      <p className="page-description">
        Blocos F e G — abriga a <b>Cantina</b>, <b>Refeitório</b>, <b>Área de Convívio</b>, <b>CLF</b>, <b>Laborátorio de Física</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco F e G" className="map-image" />
        <div className="legend">
          <p><b>G01:</b> CLF</p>
          <p><b>G02:</b> Cantina</p>
          <p><b>G03:</b> Estudo</p>
          <p><b>G04:</b> Laborátorio de Física</p>
          <p><b>G05:</b> Arquivos</p>
          <p><b>G06:</b> Refeitório</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco F e G" className="map-image" />
        <div className="legend">
          <p><b>G07:</b> Área de Convívio</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoG;