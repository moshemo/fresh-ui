import styled from 'styled-components'
import { space } from 'styled-system'

import { colors } from 'Variables'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.08), 1px -2px 5px rgba(0, 0, 0, 0.02);

  /* padding: 24px; */

  ${space}
`

export const CardTitle = styled.div`
  background-color: ${colors.light};
  padding: 16px;

  ${space}
`

export const CardBody = styled.div`
  /* background-color: ${colors.primaryLighter}; */
  padding: 16px;

  ${space}
`
