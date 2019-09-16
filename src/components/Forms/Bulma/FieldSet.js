import styled from 'styled-components'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from 'Components'
import { DisabledCSS } from './Shared'

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
