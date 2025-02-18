import styled from 'styled-components';

export const SearchContainer = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;
`;

export const SearchInput = styled.input`
    width: 50%;
    padding: 12px;
    border: 2px solid #EBDBFA;
    border-radius: 8px;
    font-size: 16px;
    
    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(235, 219, 250, 0.5);
    }
`;

