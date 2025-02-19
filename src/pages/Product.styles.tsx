import styled from 'styled-components';


export const ProductContainer = styled.div`
display: flex;
flex-direction: column;
margin: 2em auto;
box-shadow: 0 5px 15px rgba(0,0,0,0.1);
width: 700px;
padding: 0.2em 0em 2em;

@media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`

export const TextContainer = styled.div`
text-align: left;
padding: 1em;
`

export const ProductImage = styled.img`
width: 670px;
margin: 0 auto;

@media (max-width: 768px) {
    width: 470px;
  }

  @media (max-width: 500px) {
    width: 270px;
  }

`

export const ProductHeadline = styled.h1`
font-family: ${props => props.theme.fonts.heading};
margin: 0.5em auto;

`