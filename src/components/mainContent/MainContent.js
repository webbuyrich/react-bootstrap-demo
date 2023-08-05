import React  from "react";
import PriceCardFree from "./PriceCardFree";
import PriceCardPro from "./PriceCardPro";
import PriceCardEnterprise from "./PriceCardEnterprise";
import PlansTable from "./PlansTable";

const MainContent = () => {
    return(       
        
        <main>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <PriceCardFree />
                <PriceCardPro />            
                <PriceCardEnterprise />
            </div>
            <PlansTable />
            
        </main>             
    )
}

export default MainContent;