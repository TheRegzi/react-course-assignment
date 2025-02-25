import React, { useEffect, useState } from 'react';
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
      updateTotalSum(parsedCart);
    }
  }, []);

  const updateTotalSum = (items: CartItem[]) => {
    const sum = items.reduce((acc: number, item: CartItem) => {
      return acc + (item.discountedPrice * item.quantity);
    }, 0);
    setTotalSum(sum);
  };

  const updateQuantity = (productId: string, change: number) => {
    const updatedCart = cartItems.reduce((acc: CartItem[], item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
          return acc;
        }
        return [...acc, { ...item, quantity: newQuantity }];
      }
      return [...acc, item];
    }, []);

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateTotalSum(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

    if (cartItems.length === 0) {
      return <C.CartContainer>
        <h1>Shopping Cart</h1>
        <p>Your cart is empty</p>
        <C.CheckoutButton to={`/`}>Go to Home</C.CheckoutButton>
        </C.CartContainer>;
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
                  <p>{cartItem.description.length > 36  ? `${cartItem.description.slice(0, 36)}...` : cartItem.description}</p>
                  <div>
                        ${cartItem.discountedPrice.toFixed(2)}
                      </div>
                  <C.QuantityContainer> 
                  <div>
                  <C.QuantityButton onClick={(e) => {
                    e.preventDefault(); 
                    updateQuantity(cartItem.id, -1);
                  }}>-</C.QuantityButton>
                </div>
                <div>{cartItem.quantity}</div>
                <div>
                  <C.QuantityButton onClick={(e) => {
                    e.preventDefault(); 
                    updateQuantity(cartItem.id, 1);
                  }}>+</C.QuantityButton>
                </div>
                  </C.QuantityContainer>
                </C.ProductInfo>
              </C.ProductContainer>
            </C.ProductLink>
          ))}
          <div>Total: ${totalSum.toFixed(2)}</div>
          <C.CheckoutButton to={`./Checkout.tsx`}>Proceed to Checkout</C.CheckoutButton>
        </C.CartContainer>
      );
  }
  
  export default Cart;