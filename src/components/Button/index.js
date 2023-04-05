import styled from "styled-components";

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
  padding: 1rem 0.8rem;             
`

export default Button;