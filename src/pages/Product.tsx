import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as P from './Product.styles';

interface ProductImage {
    url: string;
    alt: string;
  }
  
  interface Review {
    id: string;
    username: string;
    rating: number;
    description: string;
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
  
  interface RouteParams {
    id: string;
  }
  
  interface CartItem extends Product {
    quantity: number;
  }
  
  interface AddToCartButtonProps {
    product: Product;
  }
  
  function AddToCartButton({ product }: AddToCartButtonProps) {
    const [isAdded, setIsAdded] = useState(false);
  
    const handleAddToCart = () => {
      try {
        const existingCart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
        
        const existingProductIndex = existingCart.findIndex(item => item.id === product.id);
        
        let newCart: CartItem[];
        
        if (existingProductIndex !== -1) {
          newCart = existingCart.map((item, index) => {
            if (index === existingProductIndex) {
              return { 
                ...product, 
                quantity: item.quantity + 1 
              };
            }
            return item;
          });
        } else {
          newCart = [...existingCart, { 
            ...product,
            quantity: 1,
          }];
        }
        
        localStorage.setItem('cart', JSON.stringify(newCart));
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    };
  
    return (
      <button onClick={handleAddToCart}>
        {isAdded ? 'Added to Cart!' : 'Add to Cart'}
      </button>
    );
  }

  interface ReviewProps {
    reviews: Review[];
  }
  
  function DisplayReviews({ reviews }: ReviewProps) {
    if (!reviews || reviews.length === 0) {
      return <div>No reviews yet</div>;
    }
  
    return (
      <P.ReviewsContainer>
        <h3>Customer Reviews</h3>
        <div>
          <span>({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})</span>
        </div>
        
        {reviews.map((review) => (
          <P.EachReview 
            key={review.id}>
            <P.ReviewFlex>
              <P.ReviewAuthor>{review.username}</P.ReviewAuthor>
              <span>Rating: {review.rating}/5 ⭐</span>
            </P.ReviewFlex>
            <P.ReviewBody>{review.description}</P.ReviewBody>
          </P.EachReview>
        ))}
      </P.ReviewsContainer>
    );
  }

  function Product() {
      const [product, setProduct] = useState<Product | null>(null);
      const [isLoading, setIsLoading] = useState<boolean>(false);
      const [isError, setIsError] = useState<boolean>(false);
      const { id } = useParams<RouteParams>();
      const [isOnSale, setIsOnSale] = useState<boolean>(false);
    
      useEffect(() => {
        async function getData(url: string) {
          try {
            setIsLoading(true);
            setIsError(false);
    
            const response = await fetch(url);
            const json = await response.json();
    
            setProduct(json.data);
            setIsOnSale(json.data.discountedPrice < json.data.price);
          } catch (error) {
            console.log(error);
            setIsError(true);
          } finally {
            setIsLoading(false);
          }
        }
    
        if (id) {
          getData(`https://v2.api.noroff.dev/online-shop/${id}`);
        }
      }, [id]);
    
      if (isLoading || !product) {
        return <div>Loading</div>;
      }
    
      if (isError) {
        return <div>Error</div>;
      }
    
      return (
          <P.ProductContainer>
            <P.ProductHeadline>{product.title}</P.ProductHeadline>
            <P.ProductImage src={product.image.url} alt={product.title} />
            <P.TextContainer>
            <p>{product.description}</p>
            <div>Price: ${product.price.toFixed(2)}</div>
            {product.discountedPrice < product.price && (
              <div>Discounted Price: ${product.discountedPrice.toFixed(2)}</div>
            )}
            <div>{ isOnSale ? <div>You save: ${(product.price - product.discountedPrice).toFixed(2)}!</div> : ''}</div>
            <div>Rating: {product.rating}/5</div>
            <AddToCartButton product={product} />
            </P.TextContainer>
            <DisplayReviews reviews={product.reviews} />
          </P.ProductContainer>
      );
  }
  
  export default Product;