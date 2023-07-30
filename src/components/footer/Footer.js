import React  from "react";
import { default as logo } from '../../assets/brand/bootstrap-logo.svg';


const Footer = () => {
    return(       
            
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
            <div class="col-12 col-md">
            <img src={logo} width="24" height="19" alt="Bootstrap Logo" title="Bootstrap Logo" className="mb-2" />
                <small class="d-block mb-3 text-body-secondary">&copy; 2017–2023</small>
            </div>
            <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Cool stuff</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Random feature</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Team feature</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Stuff for developers</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Another one</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Last time</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Resource</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Resource name</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Another resource</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Final resource</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Team</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Locations</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Privacy</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#" >Terms</a></li>
                </ul>
            </div>
            </div>
        </footer>             
    )
}

export default Footer;