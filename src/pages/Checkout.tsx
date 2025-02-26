import React from 'react';
import * as C from './Checkout.styles';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function Checkout() {

    return(
        <C.CheckoutContainer>
            <C.SuccessIcon icon={faCheckCircle} />
            <h1>Success!</h1>
            <C.CheckoutText>Thank you for purchasing at Next Level Goods!</C.CheckoutText>
            <C.CheckoutText>You will receive an order confirmation e-mail with details and a link to track the orders progress.</C.CheckoutText>
            <C.HomeButton to='/'>Go to Home</C.HomeButton>
        </C.CheckoutContainer>
    )
}

export default Checkout;