import styled from 'styled-components'
import { space } from 'styled-system'

export const Flex = styled.div`
  display: flex;

  ${props => props.row && 'flex-direction: row'}
  ${props => props.column && 'flex-direction: column'}
  ${props => props.rowReverse && 'flex-direction: row-reverse'}
  ${props => props.columnReverse && 'flex-direction: column-reverse'}

  ${props => props.justify === 'start' && `justify-content: flex-start;`};
  ${props => props.justify === 'end' && `justify-content: flex-end;`};
  ${props => props.justify === 'center' && `justify-content: center;`};
  ${props => props.justify === 'between' && `justify-content: space-between;`};
  ${props => props.justify === 'around' && `justify-content: space-around;`};
  ${props => props.justify === 'evenly' && `justify-content: space-evenly;`};

  ${props => props.items === 'start' && `align-items: flex-start;`};
  ${props => props.items === 'end' && `align-items: flex-end;`};
  ${props => props.items === 'center' && `align-items: center;`};
  ${props => props.items === 'stretch' && `align-items: stretch;`};
  ${props => props.items === 'baseline' && `align-items: baseline;`};

  ${props => props.wrap && `flex-wrap: wrap;`};

  ${space}
`

export const Start = styled.div``
export const Middle = styled.div``
export const End = styled.div``
