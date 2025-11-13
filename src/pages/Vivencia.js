import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/bloco1_inferior.png";
import mapaSuperior from "../assets/mapas/bloco1_superior.png";

function Vivencia() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Vivência</h1>
      <p className="page-description">
        Vivência — abriga <b>Refeitório</b>, <b>?</b>, <b>?</b>, <b>?</b>,
        <b>?</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior da Vivência" className="map-image" />
        <div className="legend">
          <p><b>Refeitório</b> Local de alimentação</p>
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior da Vivência" className="map-image" />
        <div className="legend">
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Vivencia;
