import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaSubsolo from "../assets/mapas/blocoF_subsolo.png";
import mapaInferior from "../assets/mapas/blocoF_inferior.png";
import mapaSuperior from "../assets/mapas/blocoF_superior.png";

function BlocoF() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Blocos F</h1>
      <p className="page-description">
        Bloco F — abriga a <b>COIRC/BSI</b>, <b>Morea</b>, <b>Laboratórios de Informática</b>, <b>Laboratório de Redes</b>, <b>CEEL</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco F e G" className="map-image" />
        <div className="legend">
          <p><b>F01:</b> COIRC/BSI</p>
          <p><b>F02:</b> Grufee</p>
          <p><b>F03:</b> Sala de Aula 11</p>
          <p><b>F04:</b> Sala de Aula</p>
          <p><b>F05:</b> MOREA</p>
          <p><b>F06:</b> Laboratório de Eletrônica</p>
          <p><b>F07:</b> CEEL</p>
          <p><b>Área amarela:</b> Banheiros</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco F e G" className="map-image" />
        <div className="legend">
          <p><b>F08:</b> Laboratório 03</p>
          <p><b>F09:</b> Laboratório 04</p>
          <p><b>F10:</b> Laboratório 06</p>
          <p><b>F11:</b> Laboratório 05</p>
          <p><b>F12:</b> Laboratório de Redes</p>
          <p><b>F13:</b> Laboratório 02</p>
          <p><b>F14:</b> Laboratório 01</p>
        </div>
      </div>
      
      <div className="floor-section">
        <h2>Andar Subsolo</h2>
        <img src={mapaSubsolo} alt="Mapa do andar subsolo do Bloco F" className="map-image" />
        <div className="legend">
          <p><b>F15:</b> Oficina</p>
          <p><b>F16:</b> Sala de Máquinas 02</p>
          <p><b>F17:</b> Sala de Máquinas 01</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoF;
