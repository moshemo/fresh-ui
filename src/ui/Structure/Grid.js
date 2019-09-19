import styled, { css } from 'styled-components'
import { ColorsCSS, SizesCSS } from 'UI'

// prettier-ignore
export const GridCSS = css`
  display: grid;
  ${({ gridColumns }) =>  gridColumns       &&      `grid-template-columns: ${gridColumns};`}
  ${({ gridRows }) =>     gridRows          &&      `grid-template-rows: ${gridRows};`}
  ${({ gridAreas }) =>    gridAreas         &&      `grid-template-areas: ${gridAreas};`}

  ${({ gridColumn }) =>  gridColumn       &&      `grid-column: ${gridColumn};`}
  ${({ gridRow }) =>     gridRow          &&      `grid-row: ${gridRow};`}
  ${({ gridArea }) =>    gridArea         &&      `grid-area: ${gridArea};`}

  ${({ autoFit }) =>      autoFit           &&      `grid-template-columns: repeat(auto-fit, minmax(${autoFit}, 1fr));`}

  ${({ gridGap }) =>        gridGap         &&      `grid-gap: ${gridGap};`}
  ${({ gridColumnGap }) =>  gridColumnGap   &&      `grid-column-gap: ${gridColumnGap};`}
  ${({ gridRowGap }) =>     gridRowGap      &&      `grid-row-gap: ${gridRowGap};`}

  ${gridCenter =>           gridCenter      &&      `justify-items: center; align-content: center;`}

  ${ColorsCSS}
  ${SizesCSS}
`

export const Grid = styled.div`
  ${GridCSS}
`
