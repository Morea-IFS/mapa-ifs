import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import MapaGeral from './pages/MapaGeral';
import BlocoA from './pages/BlocoA';
import BlocoB from './pages/BlocoB';
import BlocoC from './pages/BlocoC';
import BlocoD from './pages/BlocoD';
import BlocoE from './pages/BlocoE';
import BlocoF from './pages/BlocoF';
import BlocoG from './pages/BlocoG';
import BlocoH from './pages/BlocoH';
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<MapaGeral />} />
          <Route path="/blocoA" element={<BlocoA />} />
          <Route path="/blocoB" element={<BlocoB />} />
          <Route path="/blocoC" element={<BlocoC />} />
          <Route path="/blocoD" element={<BlocoD />} />
          <Route path="/blocoE" element={<BlocoE />} />
          <Route path="/blocoF" element={<BlocoF />} />
          <Route path="/blocoG" element={<BlocoG />} />
          <Route path="/blocoH" element={<BlocoH />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;