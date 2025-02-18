import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Flytt StyledIcon før HamburgerButton
export const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 2em;
  
  &:hover {
    color: gray;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 0.5em;
`;

export const NavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  padding-left: 1em;
  margin: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    padding: 1em;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 1000;
  }
`;

export const ListStyle = styled.li`
  list-style: none;
  padding: 1em;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.3em;

  @media (max-width: 768px) {
    padding: 0.5em;
    text-align: center;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

