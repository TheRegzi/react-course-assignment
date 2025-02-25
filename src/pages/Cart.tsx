import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './Cart.styles';

interface ProductImage {
  url: string;
  alt: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: Review[];
}

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}
  
  function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalSum, setTotalSum] = useState<number>(0);
  
    useEffect(() => {

      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
        
        const sum = parsedCart.reduce((acc: number, item: CartItem) => {
          return acc + (item.discountedPrice * item.quantity);
        }, 0);
        setTotalSum(sum);
      }
    }, []);
  
    if (cartItems.length === 0) {
      return <div>Your cart is empty</div>;
    }
  
    return (
        <C.CartContainer>
          <h1>Shopping Cart</h1>
          {cartItems.map((cartItem) => (
            <C.ProductLink to={`/product/${cartItem.id}`} key={cartItem.id}>
              <C.ProductContainer>
                <div>
                <C.ProductImg src={cartItem.image.url} alt={cartItem.title} />
                </div>
                <C.ProductInfo>
                  <h2>{cartItem.title}</h2>
                  <p>{cartItem.description}</p>
                  <div>
                      <div>
                        ${cartItem.discountedPrice.toFixed(2)}
                      </div>
                    <div>
                      Quantity: {cartItem.quantity}
                    </div>
                  </div>
                </C.ProductInfo>
              </C.ProductContainer>
            </C.ProductLink>
          ))}
          <div>Total: ${totalSum.toFixed(2)}</div>
        </C.CartContainer>
      );
  }
  
  export default Cart;