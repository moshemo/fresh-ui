import styled, { css } from 'styled-components'

import { Control } from './Control'
// import { RegInput, FormikInput } from './Input'
// import { Label } from './Label'

import { Button } from 'UI'
import { forms } from 'Variables'

/* prettier-ignore */
export const Field = styled.div(({before, after, horizontal, center, right, expanded, width}) => css`
  margin-bottom: ${forms.input.marginBottom};
  width: ${width ? width : forms.input.width}

  ${horizontal && `display: flex; `}

  ${(before || after) && `
    display: flex;
    justify-content: flex-start;
    ${Button} { margin: 0; }

    ${center && `justify-content: center;`}
    ${right && `justify-content: flex-end;`}

    ${Control} {
      ${expanded && `
        flex-grow: 1;
        flex-shrink: 1;
      `}
  `}
`)
