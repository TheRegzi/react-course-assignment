import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.2em;
`;

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: red;
    font-size: 1.2em;
`;


export const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    font-family: ${props => props.theme.fonts.heading};
`;

export const ProductsTitle = styled.h2`
    margin: 20px 0;
    font-family: ${props => props.theme.fonts.heading};
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`;

export const ProductLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const ProductCard = styled.div`
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s;
    height: 420px;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
`;

export const ProductContent = styled.div`
    padding: 15px;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const ProductTitle = styled.h3`
    margin: 10px 0;
    font-size: 1.2em;
`;

export const ProductDescription = styled.p`
    color: #666;
    margin: 10px 0;
    font-size: 0.9em;
`;


export const PriceContainer = styled.div`
    margin: 10px 0;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const OriginalPrice = styled.span`
  ${props => {
    if (props.discountedPrice === props.price) {
      return `
        color: red;
        font-weight: bold;
      `;
    } else {
      return `
        text-decoration: line-through;
        color: #999;
      `;
    }
  }}
`;

export const DiscountPrice = styled.span`
    color: red;
    font-weight: bold;
`;

export const Rating = styled.div`
    color: #f39c12;
    margin-top: 10px;
`;

export const ViewProduct = styled.button`
background: #EBDBFA;
border: none;
font-family: ${props => props.theme.fonts.secondary};
padding: 0.5em 1.5em;
width: 100%;
cursor: pointer;
font-weight: bold;
color: black;

&:hover{
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transform: scale(1.03);
  }
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin: 1em 0em 0em;
`