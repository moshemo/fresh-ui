import { css } from 'styled-components'

import { colors, fonts } from 'Variables/'

const Generic = css`
  * {
    background-repeat: no-repeat;
    box-sizing: inherit;
    margin: 0;
    padding: 0;

    :before,
    :after {
      box-sizing: inherit;
    }
  }

  html {
    background-color: ${colors.offWhite};
    box-sizing: border-box;
    font-size: ${fonts.size.md};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-size: ${fonts.size.md};
  }

  code,
  pre {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-family: ${fonts.family.code};
  }

  body {
    color: ${colors.black};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    font-family: ${fonts.family.roboto};
  }

  a {
    color: ${colors.link};
    cursor: pointer;
    text-decoration: none;
  }

  a strong {
    color: currentColor;
  }

  a:hover {
    color: ${colors.linHhover};
  }

  code {
    background-color: ${colors.light};
    color: ${colors.code};
    font-size: ${fonts.size.sm};
    font-weight: 400;
    padding: 0.25em 0.5em;
  }

  hr {
    background-color: ${colors.light};
    border: none;
    display: block;
    height: 2px;
    margin: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  input[type='checkbox'],
  input[type='radio'] {
    vertical-align: baseline;
  }

  small {
    font-size: ${fonts.size.sm};
  }

  span {
    font-style: inherit;
    font-weight: inherit;
  }

  strong {
    color: ${colors.black};
    font-weight: 700;
  }

  fieldset {
    border: none;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    background-color: ${colors.light};
    color: ${colors.dark};
    font-size: 0.875em;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
    white-space: pre;
    word-wrap: normal;
  }

  pre code {
    background-color: transparent;
    color: currentColor;
    font-size: 1em;
    padding: 0;
  }

  table td,
  table th {
    text-align: left;
    vertical-align: top;
  }

  table th {
    color: ${colors.black};
  }

  h1 {
    font-size: ${fonts.size.xxxl};
    font-weight: 300;
    line-height: 1;
    letter-spacing: ${fonts.spacing.closer};
    font-family: ${fonts.family.roboto};
  }

  h2 {
    font-size: ${fonts.size.xxl};
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: ${fonts.spacing.close};
    font-family: ${fonts.family.roboto};
  }

  h3 {
    font-size: ${fonts.size.xl};
    font-weight: 500;
    line-height: 48px;
    letter-spacing: normal;
    font-family: ${fonts.family.roboto};
  }

  h4 {
    font-size: lg;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: normal;
    font-family: ${fonts.family.roboto};
  }

  h5 {
    font-size: md;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: normal;
    font-family: ${fonts.family.roboto};
  }

  h6 {
    font-size: md;
    font-weight: ${fonts.weight.bolder};
    line-height: 1;
    letter-spacing: ${fonts.spacing.wide};
    font-family: ${fonts.family.roboto};
  }
`

export default Generic
