import styled from 'styled-components';

export const HeaderStyle = styled.header`
background-color: #EBDBFA;
display: flex;
flex-direction: row;
align-items: center;
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
  
  @media (max-width: 768px) {
    width: 60px;
  }
`;