import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ListStyle = styled.li`
  list-style: none;
  padding: 1em;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
`;

export const NavList = styled.ul`
  display: flex;
  padding-left: 1em;
  margin: 1em;
`;

