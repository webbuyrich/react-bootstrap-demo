import React  from "react";
import { ReactComponent as Checkmark } from "bootstrap-icons/icons/check.svg";

const PlansTable = () => {
    return(       
        <>
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
        </>
    )
}

export default PlansTable;

