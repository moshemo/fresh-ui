import styled from 'styled-components'

import { Button } from 'Components'
import { colors } from 'Variables'

// prettier-ignore
export const InputSection = styled.div`
  position: relative;
  width: 100%;

  ${Button} {
    background-color: ${({color}) => color && colors[color]};
    border-color: transparent;
    color: ${({darkText}) => (darkText ? colors.dark : colors.light)};

    ${({ before }) => before && `
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    `}

    ${({ after }) => after && `
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    `}
  }
`
