import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as Icon } from 'FontAwesome'

import { InputCss } from './Input/CSS'

import { colors, forms } from 'Variables'

const SelectBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 100%;
  position: relative;
  vertical-align: top;
`

const SelectElement = styled.select`
  ${InputCss};

  appearance: menulist;
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: 0;
  padding-right: ${forms.input.height};

  appearance: button;
  color: ${colors.dark};

  ${props => props.fullWidth && `grid-column: 1 / -1;`}
`

const SelectIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${forms.icon.color};
  height: ${forms.input.height};
  pointer-events: none;
  position: absolute;
  top: 30;
  right: 0;
  width: ${forms.input.height};
  z-index: 4;
`

export const Select = props => {
  const { children, icon = 'angle-down' } = props
  return (
    <SelectBase className={props.className}>
      <SelectElement>{children}</SelectElement>
      <SelectIcon>
        <Icon icon={icon} />
      </SelectIcon>
    </SelectBase>
  )
}
