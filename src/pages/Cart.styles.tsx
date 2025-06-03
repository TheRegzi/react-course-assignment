import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  align-items: center;
  width: 800px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 1100px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 350px;
  }
`;

export const Headline = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ProductImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 1em;

  @media (max-width: 600px) {
    width: 130px;
    height: 130px;
    margin: 0.5em;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 200px;
`;

export const ProductContainer = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: row;
  border: 2px solid #ebdbfa;
  border-radius: 10px;
  margin: 1em;
  overflow: hidden;

  @media (max-width: 1100px) {
    width: 400px;
  }

  @media (max-width: 600px) {
    width: 320px;
    margin: 0.5em;
  }
`;

export const ProductInfo = styled.div`
  padding: 0em 2em 1em;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 600px) {
    padding: 0 1.5em;
  }
`;

export const ProductTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const ProductDescription = styled.p`
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 1.1em;
`;

export const CheckoutButton = styled(Link)`
  background: #655469;
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5em 1em;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.2em;
  margin: 1em 0em 2.5em;

  &:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin: 1em 0;
  align-items: center;
`;

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
`;

export const TotalInfo = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  margin: 0.5em;
  font-family: ${(props) => props.theme.fonts.primary};
`;
