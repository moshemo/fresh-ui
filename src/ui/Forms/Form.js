import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { grid } from 'styled-system'
import { Form as FormikForm } from 'formik'

import { Field } from './Field'
import { RegInput, FormikInput } from './Input'
import { DisabledCSS } from './Shared'
import { Textarea } from './Textarea'

import { Button } from 'UI'

import { FormContext } from 'Context'

// prettier-ignore
const FormCSS = css`
  ${({ horizontal }) => horizontal && `

    ${Field} {
      display: grid;
      grid-template-columns: minmax(100px, auto) 1fr;
      grid-column-gap: 16px;

      align-items: center;
      text-align: right;
    }
  `}

  ${({ disabled }) => disabled && `
      ${Button} { cursor: not-allowed; }
      
      ${RegInput},
      ${FormikInput},
      ${Textarea} {
        ${DisabledCSS}
      }
  `}

  ${grid}
`

export const FormBase = styled.form`
  ${FormCSS}
`
export const FormikBase = styled(FormikForm)`
  ${FormCSS}
`

export const Form = props => {
  const { toggleLabels, toggleFormik, noFormik } = useContext(FormContext)

  useEffect(() => {
    const propKeys = Object.keys(props)
    toggleLabels(propKeys.includes('noLabels'))
    toggleFormik(propKeys.includes('formik'))
  }, [props])

  const FormComponent = noFormik ? FormBase : FormikBase

  return <FormComponent {...props}>{props.children}</FormComponent>
}
