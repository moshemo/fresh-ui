import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from 'Components'
import { colors } from 'Variables'

export const NavBase = styled.nav`
  display: flex;
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${colors.dark};
  padding: 9px 18px;
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    /* background-color: ${colors.primaryDark}; */
    color: ${colors.black};
  }

  ${props =>
    props.circle === 'true' &&
    `
    :hover { 
      span { background-color: ${colors.secondaryDark};}
    }
    span {  
      background-color: ${colors.secondaryDarker};
      color: ${colors.light};
      padding: 9px;
      border-radius: 50%; }
    `}
`

export const ProfileLink = styled.span`
  background-color: orange;
  padding: 9px;
  border-radius: 50%;
`

const SubNavBase = styled.div`
  background-color: ${colors.primaryDark};

  display: none;

  position: absolute;
  top: 60px;
  left: 0;

  width: 100%;

  ${Container} {
    display: flex;
    justify-content: flex-end;
  }
`

export const HasSubNav = styled.div`
  display: flex;

  :hover {
    ${NavLink} {
      background-color: ${colors.primaryDark};
    }
    ${SubNavBase} {
      display: block;

      ${NavLink} {
        :hover {
          background-color: ${colors.light};
          color: ${colors.dark};
        }
      }
    }
  }
`

export const SubNav = props => (
  <SubNavBase>
    <Container>{props.children}</Container>
  </SubNavBase>
)
