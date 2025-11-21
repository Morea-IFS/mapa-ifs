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
        Bloco E — abriga <b>COAU</b>, <b>COED</b>, <b>Canteiro de Obras</b>, <b>Sala de Plástica</b>, <b>Ateliês</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco E" className="map-image" />
        <div className="legend">
          <p><b>E01:</b> COED</p>
          <p><b>E02:</b> Ateliê de Arquitetura</p>
          <p><b>E03:</b> Laboratório CAD</p>
          <p><b>E04:</b> Ateliê de Arquitetura</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Inferior (Subsolo)</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior(Subsolo) do Bloco E" className="map-image" />
        <div className="legend">
          <p><b>E05:</b> COAU</p>
          <p><b>E06:</b> Sala de Plástica</p>
          <p><b>E07:</b> Laboratório de CAD</p>
          <p><b>E08:</b> Ateliê de Arquitetura</p>
          <p><b>E09:</b> Canteiro de Obras</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoE;
