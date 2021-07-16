import React from "react"
import logo from '../images/fellowship-scan-logo.png'
import '../style/Navbar.css'

function Navbar() {
    return(
        <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a href="/"><img src={logo} alt="Tellor" height="75px"/></a>
                <form class="d-flex">
                    <a class="nav-link active" aria-current="page" href="/feeds">feeds</a>
                    <a class="nav-link active" aria-current="page" href="/reporters">reporters</a>
                    <a class="nav-link active" aria-current="page" href="/transactions">transactions</a>
                </form>
                </div>
        </nav>
    )
}

export default Navbar;