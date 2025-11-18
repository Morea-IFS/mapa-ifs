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
          <Link to="/blocoA" onClick={closeSidebar}>Bloco A</Link>
          <Link to="/blocoB" onClick={closeSidebar}>Bloco B</Link>
          <Link to="/blocoC" onClick={closeSidebar}>Bloco C</Link>
          <Link to="/blocoD" onClick={closeSidebar}>Bloco D</Link>
          <Link to="/blocoE" onClick={closeSidebar}>Bloco E</Link>
          <Link to="/blocoFG" onClick={closeSidebar}>Bloco F e G</Link>
          <Link to="/blocoH" onClick={closeSidebar}>Bloco H</Link>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
