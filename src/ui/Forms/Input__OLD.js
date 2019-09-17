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

  // Field
  const fieldProps = {
    after: after,
    before: before,
    center: center,
    horizontal: horizontal,
    right: right,
  }
  // Label
  // const Label = !noLabels && LabelComponent
  const labelProps = {
    checkbox,
    htmlFor: htmlFor ? htmlFor : name,
    horizontal,
    radio,
  }
  const labelChildren = label ? label : titleCase

  // // ControlBefore
  // const ControlBefore = before ? Control : React.Fragment
  const beforeProps = { before: before, ...props }

  // Control
  const controlProps = {
    iconLeft,
    iconRight,
  }

  // InputComponent
  const InputComponent = useFormik ? FormikInput : StyledInput
  const inputProps = {
    id: htmlFor ? htmlFor : name,
    fullWidth,
    placeholder: placeholder ? placeholder : titleCase,
    type: 'text',
    ...props,
  }

  // // IconLeft
  // const IconLeft = iconLeft ? Icon : React.Fragment

  // // const IconLeft = Icon
  // const iconLeftProps = {
  //   icon: iconLeft,
  //   side: 'left',
  // }

  // // IconRight
  // const IconRight = iconRight ? Icon : React.Fragment
  // const iconRightProps = {
  //   icon: iconRight,
  //   side: 'right',
  // }

  // // Message
  // const Message = message ? Help : React.Fragment
  const messageProps = {
    error,
    info,
    success,
    warning,
  }

  // ContentAfter
  // const ControlAfter = after ? Control : React.Fragment
  const afterProps = { after: after, ...props }

  return (
    <Field {...fieldProps}>
      {!noLabels && <Label {...labelProps}>{labelChildren}</Label>}
      {before && <Control {...beforeProps}> {before}</Control>}
      <Control {...controlProps}>
        <InputComponent {...inputProps} />
        {iconLeft && <Icon icon={iconLeft} side="left" />}
        {iconRight && <Icon icon={iconRight} side="right" />}
        {message && <Help {...messageProps}>{message}</Help>}
      </Control>
      {after && <Control {...afterProps}>{after}</Control>}
    </Field>
  )

  // return (
  //   <Field {...fieldProps}>
  //     {!noLabels && <Label {...labelProps}>{labelChildren}</Label>}
  //     {before && <Control {...beforeProps}> {before}</Control>}
  //     <Control {...controlProps}>
  //       <InputComponent {...inputProps} />
  //       {iconLeft && <Icon icon={iconLeft} side="left" />}
  //       {iconRight && <Icon icon={iconRight} side="right" />}
  //       {message && <Help {...props}>{message}</Help>}
  //     </Control>
  //     {after && <Control {...afterProps}>{after}</Control>}
  //   </Field>
  // )

  // return (
  //   <Field {...fieldProps}>
  //     <Label {...labelProps}>{labelChildren}</Label>
  //     <ControlBefore {...beforeProps} />
  //     <Control {...controlProps}>
  //       <InputComponent {...inputProps} />
  //       <IconLeft {...iconLeftProps} />
  //       <IconRight {...iconRightProps} />
  //       <Message {...messageProps} />
  //     </Control>
  //     <ControlAfter {...afterProps} />
  //   </Field>
  // )

  // return (
  //   <Field {...fieldProps}>
  //     {/* {!noLabels && <Label {...labelProps}>{labelChildren}</Label>} */}
  //     {/* {before && <Control {...beforeProps}> {before}</Control>} */}
  //     <Label {...labelProps}>{labelChildren}</Label>
  //     <ControlBefore {...beforeProps}>{before}</ControlBefore>
  //     <Control {...controlProps}>
  //       <InputComponent {...inputProps} />
  //       <IconLeft {...iconLeftProps} />
  //       <IconRight {...iconRightProps} />
  //       {/* {iconLeft && <Icon icon={iconLeft} side="left" />}
  //       {iconRight && <Icon icon={iconRight} side="right" />} */}
  //       <Message {...messageProps}>{message}</Message>
  //       {/* {message && <Help {...props}>{message}</Help>} */}
  //     </Control>
  //     <ControlAfter {...afterProps}>{after}</ControlAfter>
  //     {/* {after && <Control {...afterProps}>{after}</Control>} */}
  //   </Field>
  // )
}
