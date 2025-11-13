import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import MapaGeral from './pages/MapaGeral';
import Bloco1 from './pages/Bloco1';
import Bloco2 from './pages/Bloco2';
import Bloco3 from './pages/Bloco3';
import Bloco4 from './pages/Bloco4';
import CorredorOeste from './pages/CorredorOeste';
import CorredorCentral from './pages/CorredorCentral';
import CorredorLeste from './pages/CorredorLeste';
import Vivencia from './pages/Vivencia';
import Coinf from './pages/Coinf';
import Arquitetura from './pages/Arquitetura';
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<MapaGeral />} />
          <Route path="/bloco1" element={<Bloco1 />} />
          <Route path="/bloco2" element={<Bloco2 />} />
          <Route path="/bloco3" element={<Bloco3 />} />
          <Route path="/bloco4" element={<Bloco4 />} />
          <Route path="/corredor-oeste" element={<CorredorOeste />} />
          <Route path="/corredor-central" element={<CorredorCentral />} />
          <Route path="/corredor-leste" element={<CorredorLeste />} />
          <Route path="/vivencia" element={<Vivencia />} />
          <Route path="/coinf" element={<Coinf />} />
          <Route path="/arquitetura" element={<Arquitetura />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;