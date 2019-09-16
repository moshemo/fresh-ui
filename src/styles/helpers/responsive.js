import { css } from 'styled-components'

import { breakpoints } from 'Variables'

/*** MEDIA QUERIES ***/
// min-width
export const above = Object.keys(breakpoints).reduce(
  (mediaQuery, breakpoint) => {
    mediaQuery[breakpoint] = (...args) => css`
      @media screen and (min-width: ${breakpoints[breakpoint]}) {
        ${css(...args)}
      }
    `
    return mediaQuery
  },
  {}
)

// max-width
export const below = Object.keys(breakpoints).reduce(
  (mediaQuery, breakpoint) => {
    mediaQuery[breakpoint] = (...args) => css`
      @media screen and (max-width: ${breakpoints[breakpoint] - 1}) {
        ${css(...args)}
      }
    `
    return mediaQuery
  },
  {}
)
