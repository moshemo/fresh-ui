import { css } from 'styled-components'
import { colors } from 'Variables'

// prettier-ignore
export const ColorsCSS = css`
  ${({ color }) => color && `color: ${color}`}
  ${({ bg }) => bg && `background-color: ${bg}`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`}
`
