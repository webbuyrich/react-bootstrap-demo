import React  from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderText from "./HeadertText";

const Header = () => {
    return(
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
           <HeaderTitle />
           <HeaderText />
        </div>
    )
}

export default Header;