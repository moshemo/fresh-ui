import React from 'react'
import styled from 'styled-components'
import { Input } from './index'

// export const Date = props => <Input type="date" {...props} />
// export const DateTimeLocal = props => (
//   <TextInput type="datetime-local" {...props} />
// )
// export const Email = props => <Input type="email" {...props} />
// export const Hidden = props => <Input type="hidden" {...props} />
// export const Month = props => <Input type="month" {...props} />
// export const Number = props => <Input type="number" {...props} />
// export const Password = props => <Input type="password" {...props} />

// export const Search = props => <Input type="search" {...props} />
// export const TextInput = props => <Input type="text" {...props} />
// export const Tel = props => <Input type="tel" {...props} />
// export const Time = props => <Input type="time" {...props} />
// export const URL = props => <Input type="url" {...props} />
// export const Week = props => <Input type="week" {...props} />

// export const Color = props => <Input plain type="color" {...props} />
// export const File = props => <Input plain type="file" {...props} />
// export const Image = props => <Input plain type="image" {...props} />
// export const Range = props => <Input plain type="range" {...props} />

export const Date = styled(Input).attrs(props => ({ type: 'date' }))``
export const DateTimeLocal = styled(Input).attrs(props => ({
  type: 'datetime-local',
}))``
export const Email = styled(Input).attrs(props => ({ type: 'email' }))``
export const Hidden = styled(Input).attrs(props => ({ type: 'hidden' }))``
export const Month = styled(Input).attrs(props => ({ type: 'month' }))``
export const Number = styled(Input).attrs(props => ({ type: 'number' }))``
export const Password = styled(Input).attrs(props => ({ type: 'password' }))``

export const Search = styled(Input).attrs(props => ({ type: 'search' }))``
export const TextInput = styled(Input).attrs(props => ({ type: 'text' }))``
export const Tel = styled(Input).attrs(props => ({ type: 'tel' }))``
export const Time = styled(Input).attrs(props => ({ type: 'time' }))``
export const URL = styled(Input).attrs(props => ({ type: 'url' }))``
export const Week = styled(Input).attrs(props => ({ type: 'week' }))``
