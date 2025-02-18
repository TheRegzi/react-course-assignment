import React, { useEffect, useState } from 'react';

const url = 'https://v2.api.noroff.dev/online-shop';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    image: string;
    rating: number;
  }

function SearchBar() {



    return(
        <div>
            <h2>Search for products here:</h2>
            <label htmlFor="search">Search for product</label>
            <input name='search' type="text" />
        </div>
    )
}

function Home() {

    const [products, setProducts] = useState<Product[]>([]);
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
  
    if (isLoading) {
      return <div>Loading products</div>;
    }
  
    if (isError) {
      return <div>Error loading data</div>;
    }

    return(
        <div>
            <h1>Welcome to Next Level Goods!</h1>
            <div>
                <SearchBar />
            </div>
            <div>
                <h2>Our Next Level Products:</h2>
      {products.map((product) => (
        <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image.url} alt={product.title} />
            <p>{product.description}</p>
            <p>Original Price: ${product.price}</p>
              {product.discountedPrice < product.price && (
                <p>Discounted Price: ${product.discountedPrice}</p>
              )}
            <p>Rating: {product.rating}/5</p>
        </div>
      ))}
    </div>
        </div>
    );
}

export default Home;