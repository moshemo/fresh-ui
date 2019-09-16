import React from 'react'
import styled from 'styled-components'

import { InputCss } from './base/InputCss'
import { Button } from 'Components'
import { Label } from './Label'
import { Select } from './Select'
import { colors, forms } from 'Variables'

import { FontAwesomeIcon as Icon } from 'FontAwesome'

export const InputBase = styled.div`
  margin-bottom: ${forms.input.marginBottom};

  ${props =>
    (props.buttonLeft || props.buttonRight) &&
    `
      display: flex; 
      align-items: center;
      justify-content: flex-start; 
    
      ${IconButton} {
        margin: 0;
      }
    `}

  ${props => props.buttonLeft && `:last-child { margin-right: -1px; }`}
  ${props => props.buttonRight && `:last-child { margin-left: -1px; }`}
`

const InputContent = styled.input`
  ${InputCss};
  
  ${props => props.iconLeft && `padding-left: ${forms.input.height};`}
  ${props => props.iconRight && `padding-right: ${forms.input.height};`}

  ${props =>
    props.plain &&
    `
    background-color: transparent;
    border: none;
    :focus { border: none; }
  `}

  ${props => props.fullWidth && `grid-column: 1 / -1;`}
  ${props => {
    if (props.error) {
      return `border-color: ${colors.error}`
    } else if (props.info) {
      return `border-color: ${colors.info}`
    } else if (props.success) {
      return `border-color: ${colors.success}`
    } else if (props.warning) {
      return `border-color: ${colors.warning}`
    }
  }};
`

const InputSection = styled.div`
  position: relative;
`

const IconBase = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${forms.icon.color};
  height: ${forms.input.height};
  pointer-events: none;
  position: absolute;
  top: 0;
  width: ${forms.input.height};
  z-index: 4;

  ${props => props.side === 'left' && `left: 0;`}
  ${props => props.side === 'right' && `right: 0;`}

  /* ${props => props.iconLeft && `padding-left: ${forms.input.height};`}
  ${props => props.iconRight && `padding-right: ${forms.input.height};`} */

`

const IconButton = styled(Button)`
  background-color: ${props => props.color && colors[props.color]};
  border-color: transparent;
  color: ${props => (props.darkText ? colors.dark : colors.light)};

  ${props =>
    props.buttonLeft &&
    `
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    `}

  ${props =>
    props.buttonRight &&
    `
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    `}
`

const Message = styled.p`
  color: ${props => {
    if (props.error) {
      return colors.error
    } else if (props.info) {
      return colors.info
    } else if (props.success) {
      return colors.success
    } else if (props.warning) {
      return colors.warning
    }
  }};

  font-size: 0.875rem;
  padding: 0;
  margin: 0.25rem 0 0;
`

export const Input = props => {
  const {
    buttonRight,
    buttonLeft,
    iconRight,
    iconLeft,
    forId,
    label,
    message,
    selectLeft,
    selectRight,
  } = props
  return (
    <InputBase {...props}>
      <Label htmlFor={forId} {...props}>
        {label}
      </Label>
      {selectLeft && (
        <InputSection>
          <Select>
            <option>One</option>
            <option>Two</option>
          </Select>
        </InputSection>
      )}
      {buttonLeft && (
        <InputSection>
          <IconButton as="a" {...props}>
            {buttonLeft}
          </IconButton>
        </InputSection>
      )}
      <InputSection>
        <InputContent id={forId} type="text" {...props} />
        {iconLeft && (
          <IconBase side="left">
            <Icon icon={iconLeft} {...props} />
          </IconBase>
        )}
        {iconRight && (
          <IconBase side="right">
            <Icon icon={iconRight} {...props} />
          </IconBase>
        )}

        {message && <Message {...props}>{message}</Message>}
      </InputSection>
      {buttonRight && (
        <InputSection>
          <IconButton as="a" {...props}>
            {buttonRight}
          </IconButton>
        </InputSection>
      )}
      {selectRight && (
        <InputSection>
          <Select>
            <option>One</option>
            <option>Two</option>
          </Select>
        </InputSection>
      )}
    </InputBase>
  )
}

export const Date = props => <Input type="date" {...props} />
export const DateTimeLocal = props => <Input type="datetime-local" {...props} />
export const Email = props => <Input type="email" {...props} />
export const Hidden = props => <Input type="hidden" {...props} />
export const Month = props => <Input type="month" {...props} />
export const Number = props => <Input type="number" {...props} />
export const Password = props => <Input type="password" {...props} />

export const Search = props => <Input type="search" {...props} />
export const Text = props => <Input type="text" {...props} />
export const Tel = props => <Input type="tel" {...props} />
export const Time = props => <Input type="time" {...props} />
export const URL = props => <Input type="url" {...props} />
export const Week = props => <Input type="week" {...props} />

export const Color = props => <Input plain type="color" {...props} />
export const File = props => <Input plain type="file" {...props} />
export const Image = props => <Input plain type="image" {...props} />
export const Range = props => <Input plain type="range" {...props} />
