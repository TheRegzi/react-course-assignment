import React, { useState } from 'react';
import * as S from './Search.styles';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
  }

  function SearchBar({ onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <S.SearchContainer>
            <S.SearchTitle>Search for products here:</S.SearchTitle>
            <S.SearchInput
                name='search'
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search products..."
            />
        </S.SearchContainer>
    );
}

export default SearchBar;