import React  from "react";
import { ReactComponent as Checkmark } from "bootstrap-icons/icons/check.svg";
import PriceCardFree from "./PriceCardFree";
import PriceCardPro from "./PriceCardPro";


const MainContent = () => {
    return(       
        
        <main>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <PriceCardFree />
                <PriceCardPro />
            
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Enterprise</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
                </div>
                </div>
            </div>
            </div>

            <h2 class="display-6 text-center mb-4">Compare plans</h2>

            <div class="table-responsive">
            <table class="table text-center">
                <thead>
                <tr>
                    <th style={{ "width": "34%"  }} ></th>
                    <th style={{ "width": "22%"  }} >Free</th>
                    <th style={{ "width": "22%"  }} >Pro</th>
                    <th style={{ "width": "22%"  }} >Enterprise</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row" class="text-start">Public</th>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">Private</th>
                    <td></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <th scope="row" class="text-start">Permissions</th>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">Sharing</th>
                    <td></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">Unlimited members</th>
                    <td></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">Extra security</th>
                    <td></td>
                    <td></td>
                    <td><Checkmark className="bi" width="24" height="24" /></td>
                </tr>
                </tbody>
            </table>
            </div>
        </main>             
    )
}

export default MainContent;