import styled from 'styled-components'

import { forms } from 'Variables'

export const IconBase = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${forms.icon.color};
  height: ${forms.input.height};
  pointer-events: none;
  position: absolute;
  top: 30;
  width: ${forms.input.height};
  z-index: 4;

  ${props => props.side === 'left' && `left: 0;`}
  ${props => props.side === 'right' && `right: 0;`}

  /* ${props => props.iconLeft && `padding-left: ${forms.input.height};`}
  ${props => props.iconRight && `padding-right: ${forms.input.height};`} */

`
