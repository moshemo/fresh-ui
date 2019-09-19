import styled, { css } from 'styled-components'
import { ErrorMessage as ErrorMessageBase } from 'formik'

import { colors } from 'Variables'

// prettier-ignore
export const HelpCSS = css`
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

export const Help = styled.div`
  ${HelpCSS}
`

export const ErrorMessage = styled(ErrorMessageBase)`
  ${HelpCSS}
  color: ${colors.error};
`
