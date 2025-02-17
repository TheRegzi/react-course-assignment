import React from 'react';
import * as L from "./Nav.styles";

function Nav() {
    return (
      <nav>
        <L.NavList>
       <L.ListStyle>
          <L.LinkStyle to="/">Home</L.LinkStyle>
        </L.ListStyle>
        <L.ListStyle>
          <L.LinkStyle to="/products">Products</L.LinkStyle>
        </L.ListStyle>
        <L.ListStyle>
          <L.LinkStyle to="/contact">Contact</L.LinkStyle>
        </L.ListStyle>
        <L.ListStyle>
          <L.LinkStyle to="/cart">Cart</L.LinkStyle>
        </L.ListStyle>
        </L.NavList>
      </nav>
    );
  }

  export default Nav;