import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  margin-right: 0.2rem;
  font-weight: 600;

  ${({ horizontal }) =>
    horizontal &&
    `
      display: inline-block;
      margin-left: 2.5rem;
      margin-right: 1rem;
      
      :first-child { margin-left: 0;}
    `}
`
