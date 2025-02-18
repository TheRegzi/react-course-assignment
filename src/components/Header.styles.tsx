import styled from 'styled-components';

export const HeaderStyle = styled.header`
background-color: #EBDBFA;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`;

export const LogoLink = styled.a`
text-decoration: none;
cursor: pointer;

&:hover {
    opacity: 0.8;
  }
`

export const LogoImage = styled.img`
  width: 80px;
  height: auto;
  object-fit: contain;
  margin: 10px;
  padding-left: 2em;
  
  @media (max-width: 768px) {
    width: 60px;
    padding-left: 1em;
  }
`;