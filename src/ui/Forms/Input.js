import React, { useContext } from 'react'
import styled from 'styled-components'
import { Field as FormikField } from 'formik'
import startCase from 'lodash/startCase'

import { Control } from './Control'
import { Field } from './Field'
import { Help } from './Help'
import { InputIcon as Icon } from './Icon'
// import { Label as LabelComponent } from './Label'
import { Label } from './Label'
import { InputCSS, SharedCSS } from './Shared'

import { FormContext } from 'Context/FormContext'
import { forms } from 'Variables'

export const StyledInput = styled.input`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  vertical-align: top;

  background-color: ${forms.input.backgroundColor};
  color: #363636;
  font-size: 1rem;
  line-height: 1.5;

  border: ${forms.input.border};
  border-radius: ${forms.input.borderRadius};
  box-shadow: none;
  box-sizing: border-box;

  height: ${forms.input.height};
  padding: ${forms.input.padding};
  width: ${forms.input.width};

  [type='email'],
  [type='number'],
  [type='password'],
  [type='search'],
  [type='tel'],
  [type='text'],
  [type='url'],
  [type='color'],
  [type='date'],
  [type='month'],
  [type='week'],
  [type='datetime'],
  [type='datetime-local'],
  :not([type]) {
    appearance: none;
  }

  [type='checkbox'],
  [type='radio'] {
    vertical-align: baseline;
  }

  :focus {
    border: ${forms.input.focusBorder};
    outline: 0;
  }

  ::placeholder {
    color: rgba(54, 54, 54, 0.4);
  }
`

export const FormikInput = styled(FormikField)`
  ${SharedCSS}
  ${InputCSS}
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
    before: {
      before,
      ...props,
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
    after: { after: after, ...props },
  }

  const labelChildren = label ? label : titleCase

  const InputComponent = useFormik ? FormikInput : StyledInput

  return (
    <Field {...pv.field}>
      {!noLabels && <Label {...pv.label}>{labelChildren}</Label>}
      {before && <Control {...pv.before}> {before}</Control>}
      <Control {...pv.control}>
        <InputComponent {...pv.input} />
        {iconLeft && <Icon icon={iconLeft} side="left" />}
        {iconRight && <Icon icon={iconRight} side="right" />}
        {message && <Help {...pv.message}>{message}</Help>}
      </Control>
      {after && <Control {...pv.after}>{after}</Control>}
    </Field>
  )
}
