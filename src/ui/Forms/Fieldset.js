import styled from 'styled-components'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { DisabledCSS } from './Shared'

import { Button } from 'UI'

// prettier-ignore
export const FieldSet = styled.fieldset`
    ${({ disabled }) => disabled && `
    ${Button} { cursor: not-allowed; }
    
    ${Input},
    ${Textarea} {
      ${DisabledCSS}
    }
  `}
`
