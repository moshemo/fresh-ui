import { createGlobalStyle } from 'styled-components'

// import { normalize as Reset } from 'polished'
// import { ress as Reset } from './ress'
// import { Normalize as Reset } from './normalize'
import { minireset as Reset } from './minireset'

import Generic from './generic'

const GlobalCss = createGlobalStyle`
  ${Reset}
  ${Generic}
`

export default GlobalCss
