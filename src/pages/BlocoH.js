import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/blocoH_inferior.png";
import mapaSuperior from "../assets/mapas/blocoH_superior.png";

function BlocoH() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Bloco H</h1>
      <p className="page-description">
        Bloco H — abriga o <b>Auditório</b>, <b>Banheiro</b>, <b>Containers</b>, <b>Comunicação</b>,
        <b>Motoristas</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco H" className="map-image" />
        <div className="legend">
          <p><b>H01:</b> Auditório</p>
          <p><b>H02:</b> Container Estúdio</p>
          <p><b>H03:</b> Container Depósito</p>
          <p><b>H04:</b> Container Laboratório</p>
          <p><b>H05:</b> Container LIA</p>
          <p><b>Área amarela:</b> Banheiros</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco H" className="map-image" />
        <div className="legend">
          <p><b>H06:</b> Comunicação</p>
          <p><b>H07:</b> Motoristas</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoH;
