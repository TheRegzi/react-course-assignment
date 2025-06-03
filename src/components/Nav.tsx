import React, { useState, useEffect } from "react";
import * as L from "./Nav.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface CartItem {
  id: number;
  quantity: number;
}

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = cart.reduce(
        (sum: number, item: CartItem) => sum + item.quantity,
        0,
      );
      setCartItemCount(totalItems);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <L.Nav>
      <L.HamburgerButton onClick={toggleMenu}>
        <L.StyledIcon icon={faBars} />
      </L.HamburgerButton>
      <L.NavList isOpen={isOpen}>
        <L.ListStyle>
          <L.LinkStyle to="/" onClick={() => setIsOpen(false)}>
            Home
          </L.LinkStyle>
        </L.ListStyle>
        <L.ListStyle>
          <L.LinkStyle to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </L.LinkStyle>
        </L.ListStyle>
        <L.ListStyle>
          <L.LinkStyle to="/cart" onClick={() => setIsOpen(false)}>
            <L.CartContainer>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartItemCount > 0 && <L.CartCount>{cartItemCount}</L.CartCount>}
            </L.CartContainer>
          </L.LinkStyle>
        </L.ListStyle>
      </L.NavList>
    </L.Nav>
  );
}

export default Nav;
