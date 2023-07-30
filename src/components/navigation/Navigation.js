import React  from "react";
import { Navbar, Nav } from 'react-bootstrap';
import NavigationLogo from "./NavigationLogo";
import NavigationLogoText from "./NavigationLogoText";
import NavigationLinks from "./NavigationLinks";

const NavigationMenu = () => {
    return(
        <header>
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <NavigationLogo />
                    <NavigationLogoText />
                </a>
                <NavigationLinks />
            </div>
            
        </header>        
    )
}

export default NavigationMenu;