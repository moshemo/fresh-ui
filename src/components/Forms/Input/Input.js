import React, { useContext } from 'react'
import { FontAwesomeIcon as Icon } from 'FontAwesome'
import startCase from 'lodash/startCase'

import { IconBase } from './Icon'
import { InputBase } from './Base'
import { FormikContent, InputContent } from './Content'
import { Label } from '../Label'
import { Message } from './Message'
import { InputSection } from './Section'

import { FormContext } from 'Context/FormContext'

const AfterInput = props => (
  <InputSection after="after">{props.after}</InputSection>
)
const BeforeInput = props => (
  <InputSection before="before">{props.before}</InputSection>
)

const InputIcon = props => (
  <IconBase side={props.side}>
    <Icon icon={props.icon} {...props} />
  </IconBase>
)

export const Input = props => {
  const {
    after,
    before,
    iconRight,
    iconLeft,
    forId,
    label,
    message,
    name,
    placeholder,
  } = props

  const titleCase = startCase(name)

  const { noLabels, useFormik } = useContext(FormContext)
  return (
    <InputBase {...props}>
      {!noLabels && (
        <Label htmlFor={forId ? forId : name}>
          {label ? label : titleCase}
        </Label>
      )}
      {before && <BeforeInput {...props} />}
      <InputSection>
        {useFormik && (
          <FormikContent
            id={forId ? forId : name}
            placeholder={placeholder ? placeholder : titleCase}
            type="text"
            {...props}
          />
        )}
        {!useFormik && (
          <InputContent
            id={forId ? forId : name}
            placeholder={placeholder ? placeholder : titleCase}
            type="text"
            {...props}
          />
        )}
        {iconLeft && <InputIcon icon={iconLeft} side="left" />}
        {iconRight && <InputIcon icon={iconRight} side="right" />}
        {message && <Message {...props}>{message}</Message>}
      </InputSection>
      {after && <AfterInput {...props} />}
    </InputBase>
  )
}
