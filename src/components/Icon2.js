import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import {
  FaFacebookF as Facebook,
  FaTwitter as Twitter,
  FaYoutube as Youtube,
  FaPinterest as Pinterest,
} from 'react-icons/fa'

import { brands } from 'Helpers/brands'
import { colors } from 'Variables'

const ScreenReader = styled.span`
  position: absolute;
  top: -10000em;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

const IconLink = styled.a`
  display: inline-block;

  border-radius: 50%;
  color: ${colors.light};
  font-size: 30px;
  line-height: 1;
  margin-left: 15px;
  margin-right: 15px;
  padding: 1em;
  transition: all .3s;

  :hover {
    color: ${colors.light};
    opacity: .9;
    transform: scale(1.1)
  }

  ${props => props.glyph === Facebook && `background-color: ${brands.facebook}`}
  ${props => props.glyph === Twitter && `background-color: ${brands.twitter}`}
  ${props => props.glyph === Youtube && `background-color: ${brands.youtube}`}
  ${props =>
    props.glyph === Pinterest && `background-color: ${brands.pinterest}`}

  ${color}
  ${space}
`

export const Icon = props => (
  <IconLink href={props.goTo} {...props}>
    <ScreenReader>{props.screen}</ScreenReader>
    <props.glyph />
  </IconLink>
)

export const ContactIcon = styled(Icon)`
  color: ${colors.primaryLighter};
  font-size: 24px;
`

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
`

export const SocialIcon = styled(Icon)`
  color: ${colors.primaryLighter};
  font-size: 24px;
`
