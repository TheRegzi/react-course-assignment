import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5em auto;
  width: 800px;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 1100px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 350px;
  }
`;

export const SuccessIcon = styled(FontAwesomeIcon)`
  color: #2ecc71;
  font-size: 6em;
  margin: 0.5em 0 0.1em;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: pulse 2s infinite;
`;

export const CheckoutText = styled.p`
  margin: 0;
  padding: 0.5em 2em;
  text-align: center;

  @media (max-width: 600px) {
    padding: 0.5em;
  }
`;

export const HomeButton = styled(Link)`
  background: #655469;
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5em 1em;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.1em;
  margin: 1em 0em 2.5em;

  &:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }
`;
