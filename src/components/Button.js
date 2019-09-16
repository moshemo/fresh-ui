import styled from 'styled-components'
import { color, fontSize, space } from 'styled-system'

import { button } from 'Variables'

export const Button = styled('button')`
  display: inline-flex;
  align-items: center;
  
  appearance: none;

  background-color: ${button.backgroundColor};
  border: none;
  border-radius: ${button.borderRadius};
  box-shadow: ${button.boxShadow};

  color: ${button.color};
  cursor: pointer;
  
  font-size: ${button.fontSize};
  font-weight: ${button.fontWeight};

  letter-spacing: 0.5px;
  line-height: 1em;
  min-height: 1em;
  min-width: 88px;

  outline: 0;
  padding: .8em 1.5em .8em;
  position: relative;
  
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  
  vertical-align: baseline;
  user-select: none;

  &:hover {
    background-color: rgba(0,0,0,.5);
  }

  ${({ disabled }) => disabled} { cursor: not-allowed;}

  ${color}
  ${fontSize}
  ${space}
`

// ADD STYLES
export const Buttons = styled.div``
