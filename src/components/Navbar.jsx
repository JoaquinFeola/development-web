// imports
import React from 'react';
import './Navbar.css';




const OpenPlans = ( e ) => {
    e.preventDefault();
    document.getElementById('plans_content').classList.toggle('active');

};
const OpenNavLinks = ( e ) => {
    const hamburguerBtnContainer = document.querySelector('.hamburguer-btn-container');
    e.target.closest('.hamburguer-btn').classList.toggle('active'); 

    document.querySelector('.nav-links').classList.toggle('active');

    hamburguerBtnContainer.classList.toggle('active');

    if ( hamburguerBtnContainer.classList.contains('active'))
    {
        document.querySelector('.nav').style.padding = '0px';
    }
    else
    {
        document.querySelector('.nav').style.padding = '5px'
    };
};

// functional component

export function Navbar() {
  return (
        <>
            <nav className='nav'>
                <div className="hamburguer-btn-container">
                    <button className="hamburguer-btn" onClick={OpenNavLinks}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </button>
                </div>

                <div className="nav-links">
                    <a href="#" className="nav-link">
                    <i className="bi bi-house"></i>   
                        Inicio
                    </a>
                    <div className="plans-container">
                        <a href="#" className="nav-link plans-btn" onClick={OpenPlans}>Planes</a>
                        <div className="plans-content" id='plans_content'>
                            <a href="#" className="plan-link">Simple</a>
                            <a href="#" className="plan-link">Avanzado</a>
                        </div>
                    </div>
                    <a href="#" className="nav-link">Sobre nosotros</a>
                </div>
            </nav>
        </>
    );
};



