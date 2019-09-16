import { css } from 'styled-components'

export const Loader = css`
  animation: spinAround 500ms infinite linear;
  border: 2px solid $grey-lighter;
  border-radius: $radius-rounded;
  border-right-color: transparent;
  border-top-color: transparent;
  content: '';
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
`
