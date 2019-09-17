import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as FaIcon } from 'FontAwesome'
// import { Field as FormikField } from 'formik'

import { IconBase } from 'UI'
import { forms } from 'Variables'

const InputIconBase = styled(IconBase)`
  color: ${forms.icon.color};
  pointer-events: none;

  position: absolute;
  top: 0;

  height: ${forms.input.height};
  width: ${forms.input.height};

  z-index: 4;

  ${({ side }) => side === 'left' && `left: 0;`}
  ${({ side }) => side === 'right' && `right: 0;`}
`

export const InputIcon = props => (
  <InputIconBase side={props.side}>
    <FaIcon icon={props.icon} {...props} />
  </InputIconBase>
)
