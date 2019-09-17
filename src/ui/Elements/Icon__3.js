import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import {
  FaFacebookF as Facebook,
  FaFlickr as Flickr,
  FaGithub as Github,
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
  FaPinterest as Pinterest,
  FaTwitter as Twitter,
  FaYoutube as Youtube,
} from 'react-icons/fa'

import { brands } from 'Helpers/brands'
import { colors } from 'Variables'

// -------------------------
// Base Styles & Components
// -------------------------

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

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

// ----------------
// Icon Components
// ----------------

// Contact Icon
const ContactBase = styled.span`
  margin-bottom: 24px;

  svg {
    color: ${colors.primaryLighter};
    height: 48px;
    width: 48px;
  }

  ${color}
  ${space}
`

export const ContactIcon = props => (
  <ContactBase {...props}>
    <ScreenReader>{props.screen}</ScreenReader>
    <props.glyph />
  </ContactBase>
)

// Social Icon
const SocialLink = styled.a`
  display: inline-block;
  
  color: ${colors.light};
  border-radius: 50%;
  font-size: 20px;
  line-height: 1;
  /* margin-left: 15px; */
  /* margin-right: 15px; */
  margin: 15px;
  padding: 1em;
  transition: all 0.3s;


  :hover {
    color: ${colors.light};
    opacity: .9;
    transform: scale(1.1)
  }

  ${props => props.glyph === Facebook && `background-color: ${brands.facebook}`}
  ${props => props.glyph === Flickr && `background-color: ${brands.flickr}`}
  ${props => props.glyph === Github && `background-color: ${brands.github}`}
  ${props =>
    props.glyph === Instagram && `background-color: ${brands.instagram}`}
  ${props => props.glyph === LinkedIn && `background-color: ${brands.linkedin}`}
  ${props =>
    props.glyph === Pinterest && `background-color: ${brands.pinterest}`}
  ${props => props.glyph === Twitter && `background-color: ${brands.twitter}`}
  ${props => props.glyph === Youtube && `background-color: ${brands.youtube}`}

  ${color}
  ${space}
`

export const SocialIcon = props => (
  <SocialLink href={props.goTo} {...props}>
    <ScreenReader>{props.screen}</ScreenReader>
    <props.glyph />
  </SocialLink>
)

export const IconTest = props => <props.name {...props} />

// const SvgGradientBase = styled.svg.attrs(props => ({
//   'aria-hidden': 'true',
//   focusable: 'true',
// }))`
//   width: 0;
//   height: 0;
//   position: absolute;
// `

// const Stop = styled.stop.attrs(props => ({
//   offset: props.offset,
//   stopColor: props.color,
//   stopOpacity: props.opacity,
// }))``

// const IconGradient = props => (
//   <SvgGradientBase>
//     <linearGradient
//       id={props.id}
//       x1={props.x1}
//       x2={props.x2}
//       y1={props.y1}
//       y2={props.y2}
//     >
//       {props.children}
//       {/* <stop offset="0%" stopColor="#FFB186" />
//       <stop offset="100%" stopColor="#F75C90" /> */}
//     </linearGradient>
//   </SvgGradientBase>
// )
