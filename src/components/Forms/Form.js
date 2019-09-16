import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Form as FormikForm } from 'formik'

import { InputBase } from './Input'
import { Label } from './Label'

import { FormContext } from 'Context'

const FormCSS = css`
  ${({ columns }) =>
    columns &&
    `
    display: grid;
    grid-gap: 24px;
    
    grid-template-columns: ${columns};}
  `}

  ${({ horizontal }) =>
    horizontal &&
    `
    ${InputBase} {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-gap: 24px;
      ${Label} {
        text-align: right;
        position: relative; 
        top: 6px;
      }
    }
  `}
`
export const FormBase = styled.form`
  ${FormCSS}
`
export const FormikBase = styled(FormikForm)`
  ${FormCSS}
`

export const Form = props => {
  const { toggleLabels, toggleFormik, useFormik } = useContext(FormContext)

  useEffect(() => {
    const propKeys = Object.keys(props)
    toggleLabels(propKeys.includes('noLabels'))
    toggleFormik(propKeys.includes('formik'))
  }, [props])

  if (useFormik) {
    return <FormikBase {...props}>{props.children}</FormikBase>
  } else {
    return <FormBase {...props}>{props.children}</FormBase>
  }
}
