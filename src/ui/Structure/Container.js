import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { breakpoints as bp } from 'Variables'

export const ContainerCSS = css`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  @media (min-width: ${bp.sm}) {
    max-width: 540px;
  }
  @media (min-width: ${bp.md}) {
    max-width: 720px;
  }
  @media (min-width: ${bp.lg}) {
    max-width: 960px;
  }
  @media (min-width: ${bp.xl}) {
    max-width: 1140px;
  }
`

export const Container = styled.div`
  ${ContainerCSS}

  ${space}
`
