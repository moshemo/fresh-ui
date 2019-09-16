import React from 'react'

import { NavBase, NavLink, Text, Title } from 'Components'

import {
  MdDashboard as DashboardIcon,
  MdSearch as SearchIcon,
} from 'react-icons/md'

import {
  FaHome as HomeIcon,
  FaColumns as PagesIcon,
  FaRegNewspaper as ArticlesIcon,
  FaScroll as AdsIcon,
} from 'react-icons/fa'

export const TopSidebarLinks = props => (
  <NavBase>
    <NavLink to="/">
      <DashboardIcon size="1.3em" />
      <Text bolder>Dashboard</Text>
    </NavLink>
    <NavLink to="/">
      <SearchIcon size="1.3em" />
      <Text bolder>Search</Text>
    </NavLink>
  </NavBase>
)

export const ViewSiteLink = props => (
  <NavBase>
    <NavLink to="/">
      <HomeIcon />
      <Text>View Site</Text>
    </NavLink>
  </NavBase>
)

export const ContentLinks = props => (
  <NavBase style={{ flexDirection: 'column' }}>
    <Title xsmall m={'32px 32px 7px'}>
      Content
    </Title>
    <NavLink to="/">
      <PagesIcon />
      <Text>Pages</Text>
    </NavLink>
    <NavLink to="/">
      <ArticlesIcon />
      <Text>Articles</Text>
    </NavLink>
    <NavLink to="/">
      <AdsIcon />
      <Text>Ads</Text>
    </NavLink>
  </NavBase>
)
