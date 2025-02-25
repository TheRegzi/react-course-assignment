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
height: 200px;
object-fit: cover;

`

export const ProductContainer = styled.div`
width: 500px;
height: 200px;
display: flex;
flex-direction: row;
border: 2px solid #EBDBFA;
border-radius: 10px;
margin: 1em;
`

export const ProductInfo = styled.div`
padding: 1em;

`