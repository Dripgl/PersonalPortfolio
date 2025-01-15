import React from "react";
import GzImg from "../asset/Gz.png";
import "../style/Navbar.css"



function Navbar() {

    return (
        <nav className="frame-group">
            {/* Logo sulla sinistra */}
            <img className="img-logo" src={GzImg} alt="Logo" />

            {/* Testo al centro */}
            <div className="nav-title">
                I do Code &
                <p className="highlight">Chill</p>
            </div>

            {/* Bottone sulla destra */}
            <button className="contact-button" onClick={() => alert("Contattami!")}>
                Contattami
            </button>
        </nav>
    )
}

export default Navbar;