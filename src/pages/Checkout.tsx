import React from 'react';
import * as C from './Checkout.styles';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function Checkout() {

    return(
        <C.CheckoutContainer>
            <C.SuccessIcon icon={faCheckCircle} />
            <h1>Success!</h1>
            <p>Thank you for purchasing at Next Level Goods!</p>
            <p>You will receive an order confirmation e-mail with details and a link to track the orders progress.</p>
            <button>Go to Home</button>
        </C.CheckoutContainer>
    )
}

export default Checkout;