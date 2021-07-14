import React from "react"
import logo from '../images/fellowship-scan-logo.png'
import '../style/Navbar.css'

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="/"><img src={logo} alt="Tellor" height="75px"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            </div>
        </div>
    </nav>
    )
}

export default Navbar;