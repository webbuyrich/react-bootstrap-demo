import React  from "react";
import { default as logo } from '../../assets/brand/bootstrap-logo.svg';

const LogoLink = () => {
    return(       
        <div class="col-12 col-md">
            <img src={logo} width="24" height="19" alt="Bootstrap Logo" title="Bootstrap Logo" className="mb-2" />
            <small class="d-block mb-3 text-body-secondary">&copy; 2017–2023</small>
        </div>
    )
}

export default LogoLink;