import { css } from 'styled-components'

export const SizesCSS = css`
  ${({ height }) => height && `height: ${height}`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`}

  ${({ width }) => width && `width: ${width}`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth}`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`}
`
