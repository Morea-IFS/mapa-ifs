import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/bloco1_inferior.png";
import mapaSuperior from "../assets/mapas/bloco1_superior.png";

function Bloco1() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Bloco 1</h1>
      <p className="page-description">
        Bloco administrativo — abriga a <b>CRE</b>, <b>Biblioteca</b>, <b>Sala de Reunião</b>, <b>DEN</b>, 
        <b> Sala do Diretor</b> e outros setores essenciais do campus.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco 1" className="map-image" />
        <div className="legend">
          <p><b>Ala Médica:</b> Atendimento e primeiros socorros.</p>
          <p><b>CRE:</b> Coordenação de Registros Escolares.</p>
          <p><b>Biblioteca:</b> Empréstimo de livros e espaço de estudo.</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco 1" className="map-image" />
        <div className="legend">
          <p><b>Sala do Diretor:</b> Gabinete da direção geral.</p>
          <p><b>Sala de Reunião:</b> Espaço de agendamento institucional.</p>
          <p><b>DEN:</b> Diretoria de Ensino.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Bloco1;
