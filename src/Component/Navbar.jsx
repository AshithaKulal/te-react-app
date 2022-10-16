import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/react.png';


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* PROPERTY BINDING */}
                    <img src={logo} style={{height:50,width:50,padding:10}}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">Functional Component</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">Class Component</Link>
                </li>

            </ul>
        </nav>
    )
}