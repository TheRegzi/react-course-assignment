import styled from 'styled-components';

export const ProductContainer = styled.div`
width: 1000px;

@media (max-width: 1100px) {
    width: 500px;
  }
`

export const ProductRow = styled.div`
display: flex;
flex-direction: row;
margin: 2em auto;
box-shadow: 0 5px 15px rgba(0,0,0,0.1);
width: 1000px;
padding: 0em;

@media (max-width: 1100px) {
    width: 700px;
  }

  @media (max-width: 780px) {
    width: 500px;
    flex-direction: column;
  }

  @media (max-width: 520px) {
    width: 80%;
    flex-direction: column;
  }
`

export const ProductDiv = styled.div`
display: flex;
flex-direction: column;

`

export const TextContainer = styled.div`
text-align: left;
padding: 1em;
`

export const ProductImage = styled.img`
width: 500px;
height: 600px;
object-fit: cover;
margin: 0 auto;

@media (max-width: 1100px) {
    width: 370px;
    height: 500px;
  }

  @media (max-width: 780px) {
    width: 500px;
  }

  @media (max-width: 520px) {
    width: 100%;
  }

`

export const ProductHeadline = styled.h1`
font-family: ${props => props.theme.fonts.heading};
margin: 0.5em auto;
`

export const AddToCartBtn = styled.button`
background: #655469;
border: none;
border-radius: 5px;
padding: 0.5em 1.5em;
font-family: ${props => props.theme.fonts.secondary};
font-weight: 500;
font-size: 1em;
color: white;

`



export const ReviewsContainer = styled.div`
padding: 20px;
background: #f5f5f5; 
border-radius: 8px;
width: 800px;
margin: 2em auto;

@media (max-width: 1100px) {
    width: 600px;
  }

  @media (max-width: 780px) {
    width: 400px;
    flex-direction: column;
  }

  @media (max-width: 520px) {
    width: 70%;
  }
`

export const EachReview = styled.div`
padding: 15px;
margin: 1.5em 0;
background: white;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

export const ReviewBody = styled.p`
margin: 0; 
color: #666;
`

export const ReviewFlex = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: '10px';
`

export const ReviewAuthor = styled.span`
font-weight: bold;
`