import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/blocoA_inferior.png";
import mapaSuperior from "../assets/mapas/blocoA_superior.png";

function BlocoA() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Bloco A</h1>
      <p className="page-description">
        Bloco A — abriga a <b>CRE</b>, <b>Biblioteca</b>, <b>Sala de Reunião</b>, <b>DEN</b>, 
        <b>Direção Geral</b> e outros setores essenciais do campus.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco A" className="map-image" />
        <div className="legend">
          <p><b>A01:</b> Ala médica do campus</p>
          <p><b>A02:</b> Arquivos</p>
          <p><b>A03:</b> Data Center</p>
          <p><b>A04:</b> CRE: Coordenação de Registro Escolar</p>
          <p><b>A05:</b> Biblioteca</p>
          <p><b>Área amarela:</b> Banheiros</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco A" className="map-image" />
        <div className="legend">
          <p><b>A06:</b> Direção Geral</p>
          <p><b>A07:</b> Gabinete da direção</p>
          <p><b>A08:</b> Gerência de Administração</p>
          <p><b>A09:</b> Sala de Reunião, Agendamento:</p>
          <p><b>A10:</b> DEN: Direção de Ensino</p>
          <p><b>A11:</b> Coordenação de Cursos Superiores</p>
          <p><b>A12:</b> NAPNE</p>
          <p><b>Área amarela:</b> Banheiros</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoA;
