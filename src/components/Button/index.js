import styled from "styled-components";
import border from "../../assets/button-border.png";

const Button = styled.button`
  background-color: var(--color-btn);
  border: none;
  font-family: inherit;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: var(--color-border);
  text-shadow: 0.08rem 0.08rem 0 var(--color-border2),  
               0.08rem -0.08rem 0 var(--color-border2),
               -0.08rem 0.08rem 0 var(--color-border2),
               -0.08rem -0.08rem 0 var(--color-border2),
               0.08rem 0rem 0 var(--color-border2),
               -0.08rem 0rem 0 var(--color-border2);
  padding-bottom: 0.5rem; 
  border-image: url(${border}) 8 fill / 8px / 8px;
  image-rendering: pixelated;
`

export default Button;