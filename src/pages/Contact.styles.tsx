import styled from 'styled-components';

export const ContactContainer = styled.div`
display: flex;
flex-direction: column;
margin: 2.5em auto;
align-items: center;
box-shadow: 0 5px 15px rgba(0,0,0,0.1);
width: 600px;
padding: 1em;

@media (max-width: 768px) {
    width: 330px;
    
  }

`

export const FormGroup = styled.div`
display: flex;
flex-direction: column;
width: 400px;
font-weight: 500;
font-size: 1.2em;
margin: 0.5em;

@media (max-width: 768px) {
    width: 300px;
    
  }
`


export const InputStyle = styled.input`
border: 2px solid #655469;
border-radius: 10px;
height: 2em;
margin: 0.5em 0 0;
padding: 0.5em;
font-size: 0.75em;
font-family: ${props => props.theme.fonts.primary};
`

export const MessageStyle = styled.textarea`
border: 2px solid #655469;
border-radius: 10px;
height: 6em;
margin: 0.5em 0 0;
padding: 0.5em;
font-size: 0.75em;
font-family: ${props => props.theme.fonts.primary};
`

export const SubmitButton = styled.button`
background: #655469;
color: white;
text-decoration: none;
cursor: pointer;
padding: 0.5em 1em;
font-family: ${props => props.theme.fonts.secondary};
font-size: 1.1em;
margin: 1.5em auto 1.5em;
border: none;

&:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }
`

export const CenterButton = styled.div`
display: flex;
margin: 0 auto;
align-items: center;
`

export const UserMessage = styled.div`
font-weight: 500;
font-size: 1.2em;
margin: 0.5em 0.5em 0;
color: ${props => props.messageType === 'success' ? 'black' : 'red'};
`

