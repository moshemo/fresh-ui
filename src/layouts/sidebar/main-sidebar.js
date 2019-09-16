import React from 'react'
import {
  SidebarBase as Sidebar,
  SidebarTop as Top,
  SidebarMiddle as Middle,
  SidebarBottom as Bottom,
} from './sidebar-styles'

import {
  TopSidebarLinks as TopLinks,
  ViewSiteLink,
  ContentLinks,
} from './sidebar-links'

export const MainSidebar = props => (
  <Sidebar>
    <Top>
      <TopLinks />
      {/* <SearchIcon
        color={colors.greyDark}
        size="1.8em"
        style={{ cursor: 'pointer' }}
      /> */}
    </Top>

    <Middle>
      <ViewSiteLink />
      <ContentLinks />
    </Middle>

    <Bottom>{/* <h4>Sidebar Bottom</h4> */}</Bottom>
  </Sidebar>
)
