import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/blocoE_subsolo.png";
import mapaSuperior from "../assets/mapas/blocoE.png";

function BlocoE() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Bloco E</h1>
      <p className="page-description">
        Bloco E — abriga <b>?</b>, <b>?</b>, <b>?</b>, <b>?</b>,
        <b>?</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco E" className="map-image" />
        <div className="legend">
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco E" className="map-image" />
        <div className="legend">
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
          <p><b>?</b> -----</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoE;
