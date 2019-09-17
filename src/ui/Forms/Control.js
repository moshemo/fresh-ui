import styled from 'styled-components'

import { RegInput, FormikInput } from './Input'

import { Button } from 'UI'
import { forms } from 'Variables'

console.log('RegInput: ', RegInput)
console.log('Button: ', Button)

// prettier-ignore
export const Control = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;

  ${({ iconLeft }) => iconLeft && `
    ${RegInput},
    ${FormikInput} { padding-left: ${forms.input.height}; }
  `}

  ${({ iconRight }) => iconRight && `
    ${RegInput},
    ${FormikInput} { padding-right: ${forms.input.height}; }
    `}

  ${({ addonLeft }) => addonLeft && `
    display: flex;
    justify-content: flex-start;
    height: ${forms.input.height};

    ${RegInput},
    ${FormikInput} {
      order: 1;
    }

    ${Button},
    select {
      margin-right: -2px;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      order: 0;
    }


  `}

  ${({ addonRight }) => addonRight && `
    display: flex;
    justify-content: flex-start;
    height: ${forms.input.height};

    ${Button},
    select {
      margin-left: -2px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

  `}
`
