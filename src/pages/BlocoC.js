import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/blocoC_inferior.png";
import mapaSuperior from "../assets/mapas/blocoC_superior.png";

function BlocoC() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Bloco C</h1>
      <p className="page-description">
        Bloco C — abriga as <b>Salas de 8 a 10</b>, <b>Sophia Polis</b>, <b>Labic</b>, <b>Mini Auditório</b>,
        <b>?</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco C" className="map-image" />
        <div className="legend">
          <p><b>Sophia Polis:</b> -----</p>
          <p><b>Labic:</b> Laboratório de Inovação e Criatividade.</p>
          <p><b>?</b> -----</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco C" className="map-image" />
        <div className="legend">
          <p><b>Sala de 8 a 10:</b> Locais de aula.</p>
          <p><b>Mini Auditório:</b> -----</p>
          <p><b>?</b> -----</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoC;
