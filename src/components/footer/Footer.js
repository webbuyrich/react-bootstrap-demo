import React  from "react";
import FeaturesLinks from "./FeaturesLinks";
import ResourcesLinks from "./ResourcesLinks";
import AboutUsLinks from "./AboutUsLinks";
import LogoLink from "./LogoLink";



const Footer = () => {
    return(   
                    
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
                <LogoLink />
                <FeaturesLinks />
                <ResourcesLinks />
                <AboutUsLinks />
            </div>
        </footer>             
    )
}

export default Footer;