import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartContainer = styled.div`
display: flex;
flex-direction: column;
margin: 2em auto;
align-items: center;
width: 800px;
box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`

export const ProductLink = styled(Link)`
text-decoration: none;
color: black;
`

export const ProductImg = styled.img`
width: 150px;
height: 210px;
object-fit: cover;

`

export const ProductContainer = styled.div`
width: 500px;
height: 210px;
display: flex;
flex-direction: row;
border: 2px solid #EBDBFA;
border-radius: 10px;
margin: 1em;
overflow: hidden;
`

export const ProductInfo = styled.div`
padding: 0em 1em 1em;

`

export const CheckoutButton = styled(Link)`
background: #655469;
color: white;
text-decoration: none;
cursor: pointer;
padding: 0.5em 1em;
font-family: ${props => props.theme.fonts.secondary};
font-size: 1.1em;
margin: 1em 0em 2em;

&:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }

`

export const QuantityContainer = styled.div`
display: flex;
flex-direction: row;
gap: 1em;
margin: 1em 0;
align-items: center;
`

export const QuantityButton = styled.button`
background: #655469;
color: white;
font-size: 1.5em;
border: none;
border-radius: 50%;
cursor: pointer;
width: 40px;
height: 40px;


&:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }

`
