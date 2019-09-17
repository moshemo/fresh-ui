import styled from 'styled-components'

// prettier-ignore
export const Label = styled.label`
  display: block;
  margin-right: 0.2rem;
  font-size: 15px;
  font-weight: 600;

  :not(:last-child) { margin-bottom: 0.25rem; }


  ${({checkbox, radio}) => (checkbox || radio) && `
    cursor: pointer;
    display: inline-block;
    line-height: 1.25;
    position: relative;

    input { cursor: pointer; }
  `}

  ${({ horizontal }) => horizontal && `
    display: inline-block;
    margin-left: 2.5rem;
    margin-right: 1rem;
    
    :first-child { margin-left: 0;}
  `}
`
