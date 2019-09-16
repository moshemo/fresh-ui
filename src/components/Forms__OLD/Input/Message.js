import styled from 'styled-components'

import { colors } from 'Variables'

export const Message = styled.p`
  color: ${props => {
    if (props.error) {
      return colors.error
    } else if (props.info) {
      return colors.info
    } else if (props.success) {
      return colors.success
    } else if (props.warning) {
      return colors.warning
    }
  }};

  font-size: 0.875rem;
  padding: 0;
  margin: 0.25rem 0 0;
`
