import styled from 'styled-components'

import { InputIconBase, StyledInput, FormikInput } from 'UI'
import { forms } from 'Variables'

// prettier-ignore
export const Control = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;

  ${({ iconLeft }) => iconLeft && `
    ${StyledInput},
    ${FormikInput} { padding-left: ${forms.input.height}; }
  `}

  ${({ iconRight }) => iconRight && `
  ${StyledInput},
    ${FormikInput} { padding-right: ${forms.input.height}; }
    `}
`
