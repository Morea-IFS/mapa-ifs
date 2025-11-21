import React from "react";
import "./PageLayout.css";
import { motion } from "framer-motion";
import mapaInferior from "../assets/mapas/blocoB_inferior.png";
import mapaSuperior from "../assets/mapas/blocoB_superior.png";

function BlocoB() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Bloco B</h1>
      <p className="page-description">
        Bloco B — abriga as <b>Salas de 1 a 7</b>, <b>Salas de Desenhos e Projetos</b>, <b>Laboratórios de Natureza</b>, <b> Laborátorio de Desenho Técnico em CAD</b>.
      </p>

      <div className="floor-section">
        <h2>Andar Inferior</h2>
        <img src={mapaInferior} alt="Mapa do andar inferior do Bloco B" className="map-image" />
        <div className="legend">
          <p><b>B01:</b> Laborátorio de Quimica</p>
          <p><b>B02:</b> Laborátorio de Física</p>
          <p><b>B03:</b> Laborátorio de Biologia</p>
          <p><b>B04:</b> Sala de Desenhos e Projetos 03</p>
          <p><b>B05:</b> Sala de Desenhos e Projetos 02</p>
          <p><b>B06:</b> Sala de Desenhos e Projetos 01</p>
          <p><b>Área amarela:</b> Banheiros</p>
        </div>
      </div>

      <div className="floor-section">
        <h2>Andar Superior</h2>
        <img src={mapaSuperior} alt="Mapa do andar superior do Bloco B" className="map-image" />
        <div className="legend">
          <p><b>B07 até o B13:</b> Salas de aula (1 a 7)</p>
          <p><b>B14:</b> Laborátorio de Desenho Técnico em CAD</p>
          <p><b>Área amarela:</b> Banheiros</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BlocoB;
