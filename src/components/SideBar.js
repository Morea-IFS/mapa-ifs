import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>

        <nav className="menu">
          <Link to="/" onClick={closeSidebar}>Mapa Geral</Link>
          <Link to="/bloco1" onClick={closeSidebar}>Bloco 1</Link>
          <Link to="/bloco2" onClick={closeSidebar}>Bloco 2</Link>
          <Link to="/bloco3" onClick={closeSidebar}>Bloco 3</Link>
          <Link to="/bloco4" onClick={closeSidebar}>Bloco 4</Link>
          <Link to="/corredor-oeste" onClick={closeSidebar}>Corredor Oeste</Link>
          <Link to="/corredor-central" onClick={closeSidebar}>Corredor Central</Link>
          <Link to="/corredor-leste" onClick={closeSidebar}>Corredor Leste</Link>
          <Link to="/vivencia" onClick={closeSidebar}>Vivência</Link>
          <Link to="/coinf" onClick={closeSidebar}>Coinf</Link>
          <Link to="/arquitetura" onClick={closeSidebar}>Arquitetura</Link>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
