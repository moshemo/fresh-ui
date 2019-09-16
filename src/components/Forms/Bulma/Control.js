import styled from 'styled-components'
import { Icon } from 'Components'
import { forms } from 'Variables'

// prettier-ignore
export const Control = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;

  ${({ iconLeft }) => iconLeft && `
    padding-left: ${forms.input.height};
    ${Icon} { left: 0;}
  `}

  ${({ iconRight }) => iconRight && `
    padding-right: ${forms.input.height};
    ${Icon} { right: 0; }`}
`
