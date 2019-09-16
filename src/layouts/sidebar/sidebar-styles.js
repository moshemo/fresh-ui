import styled from 'styled-components'

import { NavBase, NavLink, Text, Title } from 'Components'
import { colors } from 'Variables'

export const SidebarBase = styled.div`
  grid-area: sidebar;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 59px 1fr 40px;

  grid-template-areas:
    'sidebar-top'
    'sidebar-middle'
    'sidebar-bottom';

  background-color: ${colors.secondaryDarker};
  color: ${colors.light};
  min-height: 100vh;
  text-transform: uppercase;
`

export const SidebarTop = styled.div`
  grid-area: sidebar-top;
  display: flex;

  font-size: 14px;

  ${NavBase} { width: 100%; }

  ${NavLink} {
    width: 100%;
    justify-content: center;
  }

  ${NavLink}, ${Text} {
    color: ${colors.offWhite};
    
    :hover {
      color: ${colors.light};
    }
  }

  /* display: flex;
  align-items: center;
  justify-content: space-around; */

  /* background-color: ${colors.primaryLight};
  color: ${colors.light}; */
  /* border-bottom: 1px solid ${colors.primary.lighter}; */
`

export const SidebarMiddle = styled.div`
  grid-area: sidebar-middle;

  /* padding: 36px 24px; */

  svg {
    color: ${colors.light};
    height: 18px;
    width: 18px;
  }

  ${NavBase} {
    margin-top: 24px;
  }

  ${NavLink} {
    padding-left: 36px;
    width: 100%;

    :hover {
      background-color: ${colors.primary};
    }
  }

  ${Text} {
    color: ${colors.light};
    font-size: 14px;
    font-weight: 400;
    line-height: 1em;
    margin-left: 8px;
  }
`

export const SidebarBottom = styled.div`
  grid-area: sidebar-bottom;

    /* background-color: ${colors.black}; */
  /* border-top: 1px solid ${colors.grey.light}; */
`
