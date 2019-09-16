import styled from 'styled-components'
import { color } from 'styled-system'

import { colors } from 'Variables'

export const ContentBase = styled.main`
  grid-area: main;
  background-color: ${colors.offWhite};
  margin: 0 auto;
  padding: 50px 56px;
  width: 100%;

  ${color};
`
