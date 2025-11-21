import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/blocoD_inferior.png";
import mapaSuperior from "../assets/mapas/blocoD_superior.png";
import mapaSubsolo from '../assets/mapas/blocoD_subsolo.png';

function BlocoD() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Bloco D</h1>
      <p className="page-description">
        Bloco D — abriga as <b>CEEL</b>, <b>Laborátorios</b>, <b>EMEC</b>, <b>Sala de Pesquisa COED</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco D" className="map-image" />
        <div className="legend">
          <p><b>D01:</b> CEEL</p>
          <p><b>D02:</b> Laborátorio de Instalações Elétricas Prediais</p>
          <p><b>D03:</b> Laborátorio de Instalações Hidráulicas e Sanitárias</p>
          <p><b>D04:</b> Laborátorio de Mecânica dos Solos</p>
          <p><b>D05:</b> Sala de Pesquisa COED</p>
          <p><b>D06:</b> Laborátorio de Materiais de Construção</p>
          <p><b>Área amarela:</b> Banheiros</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco D" className="map-image" />
        <div className="legend">
          <p><b>D07:</b> Sala Professor EMEC</p>
          <p><b>D08:</b> Laborátorio de Ensinagens, Prototipagens e Ideias</p>
          <p><b>D09:</b> Laborátorio de Pneumática</p>
          <p><b>D10:</b> Laborátorio de Automação Industrial e Instrumentação</p>
          <p><b>D11:</b> Laborátorio de Eletrônica de Potência</p>
          <p><b>D12:</b> EMEC</p>
          <p><b>D13:</b> Laborátorio de Metrologia</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Subsolo</h2>
        <img src={mapaSubsolo} alt="Mapa do subsolo do Bloco D" className="map-image" />
        <div className="legend">
            <p><b>D14:</b> Substação Elétrica</p>
            <p><b>D15:</b> Almoxarifado</p>
            <p><b>D16:</b> Manutenção</p>
            <p><b>D17:</b> Copa</p>
            <p><b>D18:</b> Zelador</p>
            <p><b>Área amarela:</b> Banheiros</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoD;
