import styled from 'styled-components'
import { Control } from './Control'
import { Input, FormikInput } from './Input'
import { Label } from './Label'
import { Button } from 'Components'
import { forms } from 'Variables'

/* prettier-ignore */
export const Field = styled.div`
  :not(:last-child) {
    margin-bottom: ${forms.input.marginBottom};
  }

  ${({ horizontal }) => horizontal && `display: flex; `}

  ${({ before, after }) => (before || after) && `
    display: flex;
    justify-content: flex-start;
    ${Button} { margin: 0; }

    ${({center}) => center && `justify-content: center;`}
    ${({right}) => right && `justify-content: flex-end;`}

    ${Control} {
      :not(:last-child) { margin-right: -1px; }

      :first-child:not(:only-child) {
        ${Input},
        ${FormikInput} {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
      }

      :last-child:not(:only-child) {
        ${Input},
        ${FormikInput} {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
      }

      ${({ expanded }) => expanded && `
        flex-grow: 1;
        flex-shrink: 1;
      `}
  `}
`

// prettier-ignore
export const FieldLabel = styled.div`
  ${Label} { 
    font-size: inherit;
  }

  @media screen and (max-width: 768px) { 
    margin-bottom: 0.5rem; 
  }

  @media screen and (min-width: 769px), print {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
    
    ${({small}) => small && `font-size: 0.75rem; padding-top: 0.375em;`}
    ${({normal}) => normal && `padding-top: 0.375em;`}
    ${({medium}) => medium && `font-size: 1.25rem; padding-top: 0.375em;`}
    ${({large}) => large && `font-size: 1.5rem; padding-top: 0.375em;`}
  }
`

export const FieldBody = styled.div`
  ${Field} ${Field} {
    margin-bottom: 0;
  }

  @media screen and (min-width: 769px), print {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;

    ${Field} {
      margin-bottom: 0;
    }

    > ${Field} {
      flex-shrink: 1;
      :not(${({ narrow }) => narrow}) {
        flex-grow: 1;
      }
      :not(:last-child) {
        margin-right: 0.75rem;
      }
    }
  }
`
