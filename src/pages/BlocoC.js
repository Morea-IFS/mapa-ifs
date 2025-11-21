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
        Bloco C — abriga as <b>Salas de 8 a 10</b>, <b>Sophia Polis</b>, <b>Labic</b>, <b>Mini Auditório</b>, <b>Laborátorios</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco C" className="map-image" />
        <div className="legend">
          <p><b>C01:</b> Laborátorio de Informática</p>
          <p><b>C02:</b> Laborátorio de regrigeração</p>
          <p><b>C03:</b> Laborátorio de Maquinas e Acionamentos Elétricos</p>
          <p><b>C04:</b> Laborátorio de Inovação e Criatividade (LABIC)</p>
          <p><b>C05:</b> Laborátorio de Ensaios Mecânicos</p>
          <p><b>C06:</b> Sophia Polis</p>
          <p><b>C07:</b> Laborátorio de Eletricidade</p>
          <p><b>C08:</b> Laborátorio de Topografia</p>
          <p><b>C09:</b> CTI</p>
          <p><b>C10:</b> Almoxarifado/Depósito</p>
          <p><b>C11:</b> Laborátorio de Física Experimental</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco C" className="map-image" />
        <div className="legend">
          <p><b>C10:</b> Mini Auditório</p>
          <p><b>C11:</b> Laborátorio de Física Moderna</p>
          <p><b>C12:</b> Sala de Recursos Multimídia (EAD)</p>
          <p><b>C13:</b> CCHS</p>
          <p><b>C14:</b> Sala de Aula 10</p>
          <p><b>C15:</b> Sala de Aula 9</p>
          <p><b>C16:</b> Sala de aula 8</p>
          <p><b>C17:</b> Laborátorio de Controle de Simulação</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoC;
