import styled from 'styled-components'

import { colors } from 'Variables'

// prettier-ignore
export const Icon = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;

  ${({error, info, success, warning}) => {
    if      (error)   { return `color: ${colors.error} !important;` } 
    else if (info)    { return `color: ${colors.info} !important;` } 
    else if (success) { return `color: ${colors.success} !important;` } 
    else if (warning) { return `color: ${colors.warning} !important;` }
  }};

  ${({small, medium, large}) => {
      if (small)  { return `height: 1rem; width: 1rem;` } 
      if (medium) { return `height: 2rem; width: 2rem;` } 
      if (large)  { return `height: 3rem; width: 3rem;` } 
  }};
`
