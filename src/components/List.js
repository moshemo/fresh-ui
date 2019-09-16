import styled from 'styled-components'

import { colors } from 'Variables'

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  border-bottom: 1px solid ${colors.greyLighter};
  padding: 16px;
`
