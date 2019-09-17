import styled from 'styled-components'
import { color, space } from 'styled-system'

import { breakpoints as bp, colors, fonts } from 'Variables'

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  line-height: 1.3em;


  ${props => props.white && `color: ${colors.white}`}
  ${props => props.light && `color: ${colors.light}`}
  ${props => props.grey && `color: ${colors.grey.base}`}
  ${props => props.dark && `color: ${colors.dark}`}
  ${props => props.black && `color: ${colors.black}`}

  ${props => props.center && `text-align: center;`}
  ${props =>
    props.sub2 &&
    `
    font-size: 30px;
    font-weight: 100;
  `}

${props =>
  props.sub3 &&
  `
    font-size: 21px;
    font-weight: 100;
    line-height: 1.2em
  `}

  ${props =>
    props.blurb &&
    `
    color: ${colors.grey.dark};
    font-size: 19px;
    font-weight: normal;
    line-height: 1.6em;
    margin-bottom: 50px;
  `}

  ${color}
  ${space}
`

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  line-height: 1.3em;


  ${props => props.white && `color: ${colors.white}`}
  ${props => props.light && `color: ${colors.light}`}
  ${props => props.grey && `color: ${colors.grey.base}`}
  ${props => props.dark && `color: ${colors.dark}`}
  ${props => props.black && `color: ${colors.black}`}

  ${props => props.center && `text-align: center;`}
  ${props =>
    props.sub2 &&
    `
    font-size: 30px;
    font-weight: 100;
  `}

${props =>
  props.sub3 &&
  `
    font-size: 21px;
    font-weight: 100;
    line-height: 1.2em
  `}

  ${props =>
    props.blurb &&
    `
    color: ${colors.grey.dark};
    font-size: 19px;
    font-weight: normal;
    line-height: 1.6em;
    margin-bottom: 50px;
  `}

  ${color}
  ${space}
`

export const Text = styled.div`
  color: ${colors.dark};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3em;

  ${props =>
    Object.keys(props)
      .filter(key => colors[key])
      .map(color => `color: ${colors[color]};`)
      .join(' ')}
  ${props =>
    Object.keys(props)
      .filter(key => fonts.lineHeight[key])
      .map(font => `line-height: ${fonts.lineHeight[font]};`)
      .join(' ')}
  ${props =>
    Object.keys(props)
      .filter(key => fonts.size[key])
      .map(font => `font-size: ${fonts.size[font]};`)
      .join(' ')}
  ${props =>
    Object.keys(props)
      .filter(key => fonts.spacing[key])
      .map(font => `letter-spacing: ${fonts.spacing[font]};`)
      .join(' ')}
  ${props =>
    Object.keys(props)
      .filter(key => fonts.textAlign[key])
      .map(font => `text-align: ${fonts.textAlign[font]};`)
      .join(' ')}
  ${props =>
    Object.keys(props)
      .filter(key => fonts.transform[key])
      .map(font => `text-transform: ${fonts.transform[font]};`)
      .join(' ')}
  ${props =>
    Object.keys(props)
      .filter(key => fonts.verticalAlign[key])
      .map(font => `vertical-align: ${fonts.verticalAlign[font]};`)
      .join(' ')}
  ${props =>
    Object.keys(props)
      .filter(key => fonts.weight[key])
      .map(font => `font-weight: ${fonts.weight[font]};`)
      .join(' ')}


  ${props => props.breakWords && `overflow-wrap: break-word;`}
  ${props => props.breakAll && `word-break: break-all;`}
  ${props =>
    props.truncate &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}

  ${color}
  ${space}
`
