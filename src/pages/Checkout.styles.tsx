import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const CheckoutContainer = styled.div`
display: flex;
flex-direction: column;
margin: 2.5em auto;
width: 800px;
align-items: center;
box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`

export const SuccessIcon = styled(FontAwesomeIcon)`
    color: #2ecc71;
    font-size: 6em;
    margin: 0.5em 0 0.1em;
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    animation: pulse 2s infinite;
`;