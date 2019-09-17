import React from 'react'
import styled from 'styled-components'
import { Form as FormikForm, Field } from 'formik'

import { InputContentCSS } from '../Input/Content'
import { InputBase } from '../Input/Input'
import { Label } from '../Label'

export const Form = styled(FormikForm)`
  ${({ columns }) =>
    columns &&
    `
    display: grid;
    grid-gap: 24px;
    
    grid-template-columns: ${columns};}
  `}

  ${({ horizontal }) =>
    horizontal &&
    `
    ${InputBase} {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-gap: 24px;
      ${Label} {
        text-align: right;
        position: relative; 
        top: 6px;
      }
    }
  `}
`

export const Input = styled(Field)`
  ${InputContentCSS}
`

export const Date = props => <Input type="date" {...props} />
export const DateTimeLocal = props => <Input type="datetime-local" {...props} />
export const Email = props => <Input type="email" {...props} />
export const Hidden = props => <Input type="hidden" {...props} />
export const Month = props => <Input type="month" {...props} />
export const Number = props => <Input type="number" {...props} />
export const Password = props => <Input type="password" {...props} />

export const Search = props => <Input type="search" {...props} />
export const TextInput = props => <Input type="text" {...props} />
export const Tel = props => <Input type="tel" {...props} />
export const Time = props => <Input type="time" {...props} />
export const URL = props => <Input type="url" {...props} />
export const Week = props => <Input type="week" {...props} />

export const Color = props => <Input plain type="color" {...props} />
export const File = props => <Input plain type="file" {...props} />
export const Image = props => <Input plain type="image" {...props} />
export const Range = props => <Input plain type="range" {...props} />
