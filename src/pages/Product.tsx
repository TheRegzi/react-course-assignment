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
  
  function Product() {
      const [product, setProduct] = useState<Product | null>(null);
      const [isLoading, setIsLoading] = useState<boolean>(false);
      const [isError, setIsError] = useState<boolean>(false);
      const { id } = useParams<RouteParams>();
    
      useEffect(() => {
        async function getData(url: string) {
          try {
            setIsLoading(true);
            setIsError(false);
    
            const response = await fetch(url);
            const json = await response.json();
    
            setProduct(json.data);
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
            <h1>{product.title}</h1>
            <img src={product.image.url} alt={product.title} />
            <p>{product.description}</p>
            <div>Price: ${product.price.toFixed(2)}</div>
            {product.discountedPrice < product.price && (
              <div>Discounted Price: ${product.discountedPrice.toFixed(2)}</div>
            )}
            <div>Rating: {product.rating}/5</div>
          </P.ProductContainer>
      );
  }
  
  export default Product;