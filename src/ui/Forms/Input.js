import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Field as FormikField } from 'formik'
import startCase from 'lodash/startCase'

import { Control } from './Control'
import { Field } from './Field'
import { Help } from './Help'
import { InputIcon } from './Icon'
// import { Label as LabelComponent } from './Label'
import { Label } from './Label'
import { InputCSS, SharedCSS } from './Shared'

import { FormContext } from 'Context/FormContext'
import { forms } from 'Variables'

export const StyledInput = styled.input`
  background-color: beige;
  height: 350px;
`

export const FormikInput = styled(FormikField)`
  background: red;
`

export const Input = props => {
  const {
    after,
    before,
    center,
    checkbox,
    fullWidth,
    htmlFor,
    horizontal,
    iconLeft,
    iconRight,
    label,
    message,
    name,
    placeholder,
    radio,
    right,
    error,
    info,
    success,
    warning,
  } = props
  const titleCase = startCase(name)
  const { noLabels, useFormik } = useContext(FormContext)

  // const fieldProps = {
  //   after: after,
  //   before: before,
  //   center: center,
  //   horizontal: horizontal,
  //   right: right,
  // }
  // const labelProps = {
  //   checkbox,
  //   htmlFor: htmlFor ? htmlFor : name,
  //   horizontal,
  //   radio,
  // }
  // const labelChildren = label ? label : titleCase
  // const beforeProps = { before: before, ...props }
  // const controlProps = {
  //   iconLeft,
  //   iconRight,
  // }
  // const inputProps = {
  //   id: htmlFor ? htmlFor : name,
  //   fullWidth,
  //   placeholder: placeholder ? placeholder : titleCase,
  //   type: 'text',
  //   ...props,
  // }
  // const messageProps = {
  //   error,
  //   info,
  //   success,
  //   warning,
  // }
  // const afterProps = { after: after, ...props }

  // Prop Values (pv)
  const pv = {
    field: {
      after,
      before,
      center,
      horizontal,
      right,
    },
    label: {
      checkbox,
      htmlFor: htmlFor ? htmlFor : name,
      horizontal,
      radio,
    },
    control: {
      iconLeft,
      iconRight,
    },
    input: {
      id: htmlFor ? htmlFor : name,
      fullWidth,
      placeholder: placeholder ? placeholder : titleCase,
      type: 'text',
      ...props,
    },
    message: {
      error,
      info,
      success,
      warning,
    },
  }

  const labelChildren = label ? label : titleCase

  const InputComponent = useFormik ? FormikInput : StyledInput

  return (
    <Field {...pv.field}>
      {!noLabels && <Label {...pv.label}>{labelChildren}</Label>}
      {before && <Control before="before"> {before}</Control>}
      <Control {...pv.control}>
        <InputComponent {...pv.input} />
        {iconLeft && <InputIcon icon={iconLeft} side="left" />}
        {iconRight && <InputIcon icon={iconRight} side="right" />}
        {message && <Help {...pv.message}>{message}</Help>}
      </Control>
      {after && <Control after="after">{after}</Control>}
    </Field>
  )
}
