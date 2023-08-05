import React  from "react";
import PlansTable from "./PlansTable";
import PriceCardComponent from "./priceCard/PriceCardComponent";

const MainContent = () => {
    return(       
        
        <main>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <PriceCardComponent />
            </div>
            <PlansTable />
            
        </main>             
    )
}

export default MainContent;