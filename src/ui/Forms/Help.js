import styled, { css } from 'styled-components'
import { ErrorMessage } from 'formik'

import { colors } from 'Variables'

// prettier-ignore
const HelpCSS = css`
  display: block;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

export const Help = styled.p`
  ${HelpCSS}
`

export const FormikHelp = styled(ErrorMessage)`
  ${HelpCSS}
  color: ${colors.error};
`
