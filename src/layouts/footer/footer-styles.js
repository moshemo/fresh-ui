import styled from 'styled-components'

import { Text } from 'Components'
import { colors } from 'Variables'

export const FooterBase = styled.footer`
  display: flex;
  grid-area: footer;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.offWhite};

  /* color: ${colors.greyDark}; */
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 2px;
  padding: 25px 10px;
  text-align: center;

  ${Text} {
    color: ${colors.greyDarker};
  }
`
