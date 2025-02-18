import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ListStyle = styled.li`
  list-style: none;
  padding: 1em;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.3em;
  
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  
  &:hover {
  color: white;
`;

export const NavList = styled.ul`
  display: flex;
  
  padding-left: 1em;
  margin: 1em;
`;

