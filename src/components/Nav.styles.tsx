import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 2em;
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
    top: 121%;
    left: 100;
    background: #EBDBFA;
    right: 0;
    width: 100vw;
    padding: 1em;
    margin: 0;
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
    font-size: 1.1em;
  }
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: white;
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
    }
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

