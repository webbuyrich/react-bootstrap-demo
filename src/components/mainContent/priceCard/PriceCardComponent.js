import React  from "react";
import priceData from "./priceData.json"


const PriceCardComponent = ({ isFree }) => {
    
    //Access price card data from the JSON file
    const cards = priceData.cards;
    
    return(       
        <>
            {cards.map((card) =>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">{card.title}</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">${card.price}<small class="text-body-secondary fw-light">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>{card.users}users includedss</li>
                                <li>{card.storage} GB of storage</li>
                                <li>{card.emailSupport} support</li>
                                <li>{card.helpCenter}</li>
                            </ul>
                            {/* if statment needed to determine button bg */ }                            
                            <button type="button" className={"w-100 btn btn-lg " + (card.title === "Free" ? 'btn-outline-primary' : 'btn-primary')}>{card.callToAction}</button>
                        </div>
                    </div>
                </div> 
            )}
        </>
    )
}

export default PriceCardComponent;