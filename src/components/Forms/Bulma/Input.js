import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Field as FormikField } from 'formik'
import startCase from 'lodash/startCase'

import { Control } from './Control'
import { Field, FieldLabel, FieldBody } from './Field'
import { FieldSet } from './FieldSet'
import { FormGroup } from './Group'
import { Help } from './Help'
import { InputIcon as Icon } from './Icon'
import { Label as LabelComponent } from './Label'
import { InputCSS } from './Shared'
import { Textarea } from './Textarea'

import { FormContext } from 'Context/FormContext'

export const StyledInput = styled.input`
  ${InputCSS}
`

export const FormikInput = styled(FormikField)`
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

  // Field
  const fieldProps = {
    after: after,
    before: before,
    center: center,
    horizontal: horizontal,
    right: right,
  }

  // Label
  const Label = !noLabels && LabelComponent
  const labelProps = {
    checkbox,
    htmlFor: htmlFor ? htmlFor : name,
    horizontal,
    radio,
  }
  const labelChildren = label ? label : titleCase

  // ControlBefore
  const ControlBefore = before && Control
  const beforeProps = { before: before, ...props }

  // Control
  const controlProps = {
    iconLeft,
    iconRight,
  }

  // InputCompontent
  const InputComponent = useFormik ? FormikInput : StyledInput
  const inputProps = {
    id: htmlFor ? htmlFor : name,
    fullWidth,
    placeholder: placeholder ? placeholder : titleCase,
    type: 'text',
    ...props,
  }

  // IconLeft
  const IconLeft = iconLeft && Icon
  const iconLeftProps = {
    icon: iconLeft,
    side: 'left',
  }

  // IconRight
  const IconRight = iconRight && Icon
  const iconRightProps = {
    icon: iconRight,
    side: 'right',
  }

  // Message
  const Message = message && Help
  const messageProps = {
    error,
    info,
    success,
    warning,
  }

  // ContentAfter
  const ControlAfter = after && Control
  const afterProps = { after: after, ...props }

  return (
    <Field {...fieldProps}>
      {/* {!noLabels && <Label {...labelProps}>{labelChildren}</Label>} */}
      {/* {before && <Control {...beforeProps}> {before}</Control>} */}
      <Label {...labelProps}>{labelChildren}</Label>
      <ControlBefore {...beforeProps}>{before}</ControlBefore>
      <Control {...controlProps}>
        <InputComponent {...inputProps} />
        <IconLeft {...iconLeftProps} />
        <IconRight {...iconRightProps} />
        {/* {iconLeft && <Icon icon={iconLeft} side="left" />}
        {iconRight && <Icon icon={iconRight} side="right" />} */}
        <Message {...messageProps}>{message}</Message>
        {/* {message && <Help {...props}>{message}</Help>} */}
      </Control>
      <ControlAfter {...afterProps}>{after}</ControlAfter>
      {/* {after && <Control {...afterProps}>{after}</Control>} */}
    </Field>
  )
}
