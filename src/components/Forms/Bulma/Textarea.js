import styled from 'styled-components'

import { DisabledCSS, SharedCSS } from './Shared'
import { forms } from 'Variables'

export const Textarea = styled.textarea`
  ${SharedCSS}

  height: inherit;
  min-height: ${forms.textarea.minHeight};

  ${({ disabled }) => disabled && `${DisabledCSS}`}

  ${({ fullWidth }) => fullWidth && `grid-column: 1 / -1;`}
`
