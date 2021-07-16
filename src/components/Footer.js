import React from "react"
import whitelogo from '../images/tellor-scan-logo.png';
import TwitterLogo from '../icons/twitter.js';
import DiscordLogo from '../icons/discord.js';
import HomeIcon from '../icons/homeIcon.js';
import '../style/Footer.css'

function Footer() {
    return(
        <>
        <nav id="footer" class="navbar navbar-light bg-dark">
                <div class="container-fluid">
                    <a href="/"><img src={whitelogo} alt="Tellor" height="75px"/></a>
                <form id="links">
                    <a class="nav-link active footer-link" aria-current="page" href="https://tellor.io/">
                        <HomeIcon />
                        &nbsp; website
                    </a>
                    <a class="nav-link active footer-link" aria-current="page" href="https://discord.gg/n7drGjh">
                        <DiscordLogo />
                        &nbsp; discord
                    </a>
                    <a class="nav-link active footer-link" aria-current="page" href="https://twitter.com/WeAreTellor">
                        <TwitterLogo />
                        &nbsp; twitter
                    </a>
                </form>
                </div>
        </nav>
        </>
    )
}

export default Footer;