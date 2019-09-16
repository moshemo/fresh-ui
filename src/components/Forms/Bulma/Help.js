import styled from 'styled-components'

import { colors } from 'Variables'

// prettier-ignore
export const Help = styled.p`
  display: block;
  font-size: 0.875rem;
  margin-top: 0.25rem;

  ${({error, info, success, warning}) => {
  if      (error)   { return `border-color: ${colors.error}` } 
  else if (info)    { return `border-color: ${colors.info}` } 
  else if (success) { return `border-color: ${colors.success}` } 
  else if (warning) { return `border-color: ${colors.warning}` }
}};
`
