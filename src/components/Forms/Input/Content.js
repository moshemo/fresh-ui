import styled, { css } from 'styled-components'
import { Field } from 'formik'

import { InputCss } from './CSS'
import { colors, forms } from 'Variables'

// prettier-ignore
export const InputContentCSS = css`
  ${InputCss};

  ${({iconLeft}) => iconLeft && `padding-left: ${forms.input.height};`}
  ${({iconRight}) => iconRight && `padding-right: ${forms.input.height};`}

  ${({plain}) => plain && `
    background-color: transparent;
    border: none;
    :focus { border: none; }
  `}

  ${props => props.fullWidth && `grid-column: 1 / -1;`}
  ${({error, info, success, warning}) => {
    if      (error)   { return `border-color: ${colors.error}` } 
    else if (info)    { return `border-color: ${colors.info}` } 
    else if (success) { return `border-color: ${colors.success}` } 
    else if (warning) { return `border-color: ${colors.warning}` }
  }};
`

export const InputContent = styled.input`
  ${InputContentCSS}
`

export const FormikContent = styled(Field)`
  ${InputContentCSS}
`
