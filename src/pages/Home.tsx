import React, { useEffect, useState } from 'react';
import * as S from '../components/Search.styles';
import * as H from './Home.styles';

const url = 'https://v2.api.noroff.dev/online-shop';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    image: { url: string; alt: string };
    rating: number;
}

function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
        async function getData() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setProducts(json.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getData();
    }, []);

    const displayedProducts = searchTerm === '' 
        ? products 
        : products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
  
    if (isLoading) return <H.LoadingContainer>Loading products</H.LoadingContainer>;
    if (isError) return <H.ErrorContainer>Error loading data</H.ErrorContainer>;

    return(
        <H.Container>
            <H.Title>Welcome to Next Level Goods!</H.Title>
            
            <S.SearchContainer>
                <S.SearchInput
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </S.SearchContainer>

            <H.ProductsTitle>Our Next Level Products:</H.ProductsTitle>
            <H.ProductGrid>
                {displayedProducts.map((product) => (
                    <H.ProductLink to={`/product/${product.id}`} key={product.id}>
                        <H.ProductCard>
                            <H.ProductImage src={product.image.url} alt={product.title} />
                            <H.ProductContent>
                                <H.ProductTitle>{product.title}</H.ProductTitle>
                                <H.ProductDescription>
                                {product.description.length > 36  ? `${product.description.slice(0, 36)}...` : product.description}
                                </H.ProductDescription>
                                <H.PriceContainer>
                                    <H.OriginalPrice price={product.price} discountedPrice={product.discountedPrice}>
                                        ${product.price.toFixed(2)}
                                    </H.OriginalPrice>
                                    {product.discountedPrice < product.price && (
                                        <H.DiscountPrice>
                                            ${product.discountedPrice.toFixed(2)}
                                        </H.DiscountPrice>
                                    )}
                                </H.PriceContainer>
                                <H.Rating>Rating: {product.rating}/5</H.Rating>
                                <H.ButtonContainer>
                                <H.ViewProduct to={`/product/${product.id}`} key={product.id}>View Product</H.ViewProduct>
                                </H.ButtonContainer>
                            </H.ProductContent>
                        </H.ProductCard>
                    </H.ProductLink>
                ))}
            </H.ProductGrid>
        </H.Container>
    );
}

export default Home;