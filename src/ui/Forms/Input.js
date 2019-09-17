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

export const RegInput = styled.input`
  ${SharedCSS};
  ${InputCSS};
`

export const FormikInput = styled(FormikField)`
  ${SharedCSS};
  ${InputCSS};
`

export const Input = props => {
  const { addonLeft, addonRight, iconLeft, iconRight, message } = props
  const titleCase = startCase(props.name)
  const { noLabels, useFormik } = useContext(FormContext)

  // Prop Values (pv)
  const pv = {
    field: {
      center: props.center,
      horizontal: props.horizontal,
      right: props.right,
    },
    label: {
      checkbox: props.checkbox,
      htmlFor: props.htmlFor ? props.htmlFor : props.name,
      horizontal: props.horizontal,
      radio: props.radio,
    },
    input: {
      id: props.htmlFor ? props.htmlFor : props.name,
      fullWidth: props.fullWidth,
      placeholder: props.placeholder ? props.placeholder : props.titleCase,
      type: 'text',
      ...props,
    },
    message: {
      error: props.error,
      info: props.info,
      success: props.success,
      warning: props.warning,
    },
  }

  const UseRegInput = RegInput

  const UseFormikInput = FormikInput

  const InputComponent = useFormik ? UseFormikInput : UseRegInput
  const labelChildren = props.label ? props.label : titleCase

  return (
    <Field {...pv.field}>
      {!noLabels && <Label {...pv.label}>{labelChildren}</Label>}
      <Control
        addonLeft={addonLeft}
        addonRight={addonRight}
        iconLeft={iconLeft}
        iconRight={iconRight}
      >
        <InputComponent {...pv.input} />
        {iconLeft && <InputIcon icon={iconLeft} side="left" />}
        {iconRight && <InputIcon icon={iconRight} side="right" />}
        {addonLeft && <>{addonLeft}</>}
        {addonRight && <>{addonRight}</>}
        {message && <Help {...pv.message}>{message}</Help>}
      </Control>
    </Field>
  )
}
