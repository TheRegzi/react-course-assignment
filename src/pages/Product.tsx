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
        window.dispatchEvent(new Event('cartUpdated'));
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    };
  
    return (
      <P.AddToCartBtn onClick={handleAddToCart}>
        {isAdded ? 'Added to Cart!' : 'Add to Cart'}
      </P.AddToCartBtn>
    );
  }

  interface ReviewProps {
    reviews: Review[];
  }
  
  function DisplayReviews({ reviews }: ReviewProps) {
    if (!reviews || reviews.length === 0) {
      return <P.ReviewsContainer>
        <h3>Customer Reviews</h3>
        <p>No reviews yet</p>
        </P.ReviewsContainer>;
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
        <div>
          <P.ProductRow>
            <P.ProductDiv>
              <P.ProductImage src={product.image.url} alt={product.title} />
            </P.ProductDiv>
            <P.ProductDiv>
              <P.TextContainer>
                <P.ProductHeadline>{product.title}</P.ProductHeadline>
                <P.ProductDescription>{product.description}</P.ProductDescription>
                <P.Price>
                  <P.OriginalPrice 
                    price={product.price} 
                    discountedPrice={product.discountedPrice}
                  >
                    ${product.price.toFixed(2)}
                  </P.OriginalPrice>
                  {product.discountedPrice < product.price && (
                    <P.DiscountPrice>
                      ${product.discountedPrice.toFixed(2)}
                    </P.DiscountPrice>
                  )}
                </P.Price>
                {isOnSale && (
                  <P.DiscountInfo>You save: ${(product.price - product.discountedPrice).toFixed(2)}!</P.DiscountInfo>
                )}
                <P.RatingInfo>Rating: {product.rating}/5 ⭐</P.RatingInfo>
                <P.CartButtonDiv>
                  <AddToCartButton product={product} />
                </P.CartButtonDiv>
              </P.TextContainer>
            </P.ProductDiv>
          </P.ProductRow>
          <DisplayReviews reviews={product.reviews} />
        </div>
      );
  }
  
  export default Product;