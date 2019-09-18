import styled from 'styled-components'
import { grid } from 'styled-system'

export const Group = styled.div`
  display: grid;
  grid-gap: 0 12px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.autoFit ? props.autoFit : '200px')}, 1fr)
  );

  margin-bottom: 1em;

  ${grid}
`
