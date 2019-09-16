import styled from 'styled-components'
import { border, space } from 'styled-system'

import { colors } from 'Variables'

export const Divider = styled.hr`
    border: solid;
    border-width: thin 0 0 0;
    border-color: ${colors.greyLight};
    display: block;
    flex: 1 1 0px;
    height: 0px;
    max-height: 0px;
    max-width: 100%;
    transition: inherit;

    ${props =>
      props.inset &&
      `
        margin-left: 72px; 
        max-width: calc(100% - 72px)
    `}

    ${props => props.wide && `margin: 0 auto; max-width: 80%;`}

    ${props =>
      props.vertical &&
      `
        align-self: stretch;
        border-width: 0 thin 0 0;
        display: inline-flex;
        height: inherit;
        min-height: 100%;
        max-height: 100%;
        max-width: 0px;
        width: 0px;
        vertical-align: text-bottom;
    `}

    ${props =>
      props.vertical &&
      props.inset &&
      `
        margin-top: 8px;
        min-height: 0;
        max-height: calc(100% - 16px);
    `}

    ${border}
`

export const StyledDivider = styled.hr`
  border-top-color: ${props => props.color || colors.accentDark};
  border-top-style: solid;
  border-top-width: ${props => props.thickness || '2'}px;

  height: ${props => props.height || '2'}px;
  width: ${props => props.width || `100`}px;

  max-height: 10px;
  max-width: 100%;

  ${props => props.center && `margin-left: auto; margin-right: auto;`}

  ${space}
`
