import React from "react";
import logo from '../images/fellowship-scan-logo.png';
import '../style/Navbar.css';

function Navbar() {
    return(
        <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a href="/"><img src={logo} alt="Tellor" height="75px"/></a>
                <form class="d-flex">
                    <a class="nav-link active" aria-current="page" target="_blank" rel="noreferrer" href="https://github.com/tellor-io/fellowship/blob/main/LITEPAPER.MD">about</a>
                    <a class="nav-link active" aria-current="page" href="/feeds/all">feeds</a>
                    <a class="nav-link active" aria-current="page" href="/reports">reports</a>
                </form>
                </div>
        </nav>
    )
}

export default Navbar;