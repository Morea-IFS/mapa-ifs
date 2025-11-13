import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/bloco1_inferior.png";
import mapaSuperior from "../assets/mapas/bloco1_superior.png";
import mapaSubsolo from '../assets/mapas/bloco4_subsolo.png';

function Bloco4() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">C</h1>
      <p className="page-description">
        Bloco 4 — abriga as <b>Salas de 1 a 7</b>, <b>?</b>, <b>?</b>, <b>?</b>,
        <b>?</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco 4" className="map-image" />
        <div className="legend">
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco 4" className="map-image" />
        <div className="legend">
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Subsolo</h2>
        <img src={mapaSubsolo} alt="Mapa do subsolo do Bloco 4" className="map-image" />
        <div className="legend">
            <p><b>?</b> -----</p>
            <p><b>?</b> -----</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Bloco4;
