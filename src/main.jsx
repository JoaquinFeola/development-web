import React from "react";
import ReactDOM from 'react-dom/client';
import { Navbar } from "./components/Navbar";
import './index.css'


// root
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <Navbar/>
    </React.StrictMode>
);
