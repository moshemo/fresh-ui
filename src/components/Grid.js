import styled from 'styled-components'
import { color } from 'styled-system'

export const Grid = styled.div`

  display: grid;
  ${props => props.columns && `grid-template-columns: ${props.columns};`}
  ${props => props.rows && `grid-template-rows: ${props.rows};`}
  ${props => props.areas && `grid-template-areas: ${props.areas};`}
  ${props =>
    props.autoFit &&
    `grid-template-columns: repeat(auto-fit, minmax(${props.autoFit}, 1fr));`}
  ${props => props.gap && `grid-gap: ${props.gap};`}

  ${props => props.center && `justify-items: center; align-content: center;`}

  ${color}
`
