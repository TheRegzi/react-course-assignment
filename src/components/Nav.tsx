import React, { useState } from 'react';
import * as L from "./Nav.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

    return (
      <L.Nav>
       <L.HamburgerButton onClick={toggleMenu}>
        <L.StyledIcon icon={faBars} />
      </L.HamburgerButton>

      <L.NavList isOpen={isOpen}>
        <L.ListStyle>
          <L.LinkStyle to="/" onClick={() => setIsOpen(false)}>Home</L.LinkStyle>
        </L.ListStyle>
        <L.ListStyle>
          <L.LinkStyle to="/products" onClick={() => setIsOpen(false)}>Products</L.LinkStyle>
        </L.ListStyle>
        <L.ListStyle>
          <L.LinkStyle to="/contact" onClick={() => setIsOpen(false)}>Contact</L.LinkStyle>
        </L.ListStyle>
        <L.ListStyle>
          <L.LinkStyle to="/cart" onClick={() => setIsOpen(false)}>Cart</L.LinkStyle>
        </L.ListStyle>
      </L.NavList>
    </L.Nav>
  );
}

  export default Nav;