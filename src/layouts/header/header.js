import React from 'react'

import { NavBase } from 'Components'
import { End, Start } from 'Structure'
// import { SignedIn, SignedOut } from './header-links'
import { HeaderLinks } from './header-links'
import { HeaderBase, HeaderInner } from './header-styles'

export const Header = props => {
  return (
    <HeaderBase>
      <HeaderInner>
        <Start>
          <h4>Startup Reporter</h4>
        </Start>

        <End>
          <NavBase>
            <HeaderLinks />
            {/* <SignedOut />
            <SignedIn /> */}
          </NavBase>
        </End>
      </HeaderInner>
    </HeaderBase>
  )
}
