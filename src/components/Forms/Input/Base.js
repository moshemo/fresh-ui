import styled, { css } from 'styled-components'

import { Button } from 'Components'
import { forms } from 'Variables'

export const InputBase = styled.div`
  margin-bottom: ${forms.input.marginBottom};

  ${(before, after) =>
    (before || after) &&
    `
      display: flex; 
      align-items: center;
      justify-content: flex-start; 
    
      ${Button} {
        margin: 0;
      }
    `}

  ${({ before }) => before && `:last-child { margin-right: -1px; }`}
  ${({ after }) => after && `:last-child { margin-left: -1px; }`}
`
