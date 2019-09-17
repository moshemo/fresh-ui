import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { colors } from 'Variables'

const textStyles = css`
  ${props => props.white && `color: ${colors.white};`}
  ${props => props.light && `color: ${colors.light};`}
  ${props => props.greyLighter && `color: ${colors.greyLighter};`}
  ${props => props.greyLight && `color: ${colors.greyLight};`}
  ${props => props.grey && `color: ${colors.grey};`}
  ${props => props.greyDark && `color: ${colors.greyDark};`}
  ${props => props.greyDarker && `color: ${colors.greyDarker};`}
  ${props => props.dark && `color: ${colors.dark};`}
  ${props => props.black && `color: ${colors.black};`}

  ${props => props.primaryLighter && `color: ${colors.primary};`}
  ${props => props.primaryLight && `color: ${colors.primary};`}
  ${props => props.primary && `color: ${colors.primary};`}
  ${props => props.primaryDark && `color: ${colors.primary};`}
  ${props => props.primaryDarker && `color: ${colors.primary};`}


  ${props => props.secondaryLighter && `color: ${colors.secondary};`}
  ${props => props.secondaryLight && `color: ${colors.secondary};`}
  ${props => props.secondary && `color: ${colors.secondary};`}
  ${props => props.secondaryDark && `color: ${colors.secondary};`}
  ${props => props.secondaryDarker && `color: ${colors.secondary};`}


  ${props => props.tertiaryLighter && `color: ${colors.tertiary};`}
  ${props => props.tertiaryLight && `color: ${colors.tertiary};`}
  ${props => props.tertiary && `color: ${colors.tertiary};`}
  ${props => props.tertiaryDark && `color: ${colors.tertiary};`}
  ${props => props.tertiaryDarker && `color: ${colors.tertiary};`}


  ${props => props.accentLight && `color: ${colors.accent};`}
  ${props => props.accent && `color: ${colors.accent};`}
  ${props => props.accentDark && `color: ${colors.accent};`}



  ${props => props.thinner && `font-weight: 100;`}
  ${props => props.thin && `font-weight: 300;`}
  ${props => props.regular && `font-weight: 400;`}
  ${props => props.normal && `font-weight: 500;`}
  ${props => props.bold && `font-weight: 600;`}
  ${props => props.bolder && `font-weight: 700;`}


  ${props => props.closer && `letter-spacing: -0.05em;`}
  ${props => props.close && `letter-spacing: -0.025em;`}
  ${props => props.wide && `letter-spacing: 0.025em;`}
  ${props => props.wider && `letter-spacing: 0.05em;`}
  ${props => props.widest && `letter-spacing: 0.1em;`}


  ${props => props.tightest && `line-height: 1;`}
  ${props => props.tighter && `line-height: 1.25;`}
  ${props => props.tight && `line-height: 1.375;`}
  ${props => props.loose && `line-height: 1.5;`}
  ${props => props.looser && `line-height: 1.625;`}
  ${props => props.loosest && `line-height: 2;`}

  ${props => props.center && `text-align: center;`}
  ${props => props.right && `text-align: right;`}
  ${props => props.left && `text-align: left;`}
  ${props => props.justify && `text-align: justify;`}


  ${props => props.uppercase && `text-transform: uppercase;`}
  ${props => props.lowercase && `text-transform: lowercase;`}
  ${props => props.capitlize && `text-transform: capitlize;`}

  ${props =>
    props.truncate &&
    ` white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;`}
`

export const Title = styled.h1`
  color: ${colors.black};
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.3;

  ${textStyles}

  ${props => props.xsmall && `font-size: 21px;`}
  ${props => props.small && `font-size: 35px;`}
  ${props => props.large && `font-size: 50px;`}

  ${space}
`

export const Text = styled.div`
  color: ${colors.dark};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3em;

  ${textStyles}

  ${props =>
    props.columns &&
    `
    column-count: 2;
    column-gap: 32px;
    column-width: 340px;
    `}

  ${props => props.columns === '3' && `column-count: 3;column-width: 240px;`}



  ${props => props.large && `font-size: 18px;`}
  ${props => props.small && `font-size: 14px;`}

  ${space}
`
