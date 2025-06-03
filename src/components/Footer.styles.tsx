import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: #ebdbfa;
  padding-top: 5em;
  padding-bottom: 5em;
  width: 100%;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.primary};

  @media (max-width: 768px) {
    padding-top: 3.5em;
    padding-bottom: 3.5em;
  }
`;
