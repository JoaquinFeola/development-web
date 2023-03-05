import React from 'react'
import './Navbar.css'
export function Navbar() {
  return (
        <>
            <nav className='nav'>
                <div className="nav-links">
                    <a href="#" className="nav-link">Inicio</a>
                    <a href="#" className="nav-link plans-btn">
                        Planes
                        <div className="plans-content">
                            <a href="#" className="plan-link">Simple</a>
                            <a href="#" className="plan-link">Avanzado</a>
                        </div>
                    </a>
                    <a href="#" className="nav-link">Sobre nosotros</a>
                </div>
            </nav>
        </>
    );
};



