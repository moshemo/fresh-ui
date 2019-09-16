import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr 40px;
  grid-template-areas:
    'sidebar header'
    'sidebar main'
    'sidebar footer';
`

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0;
  margin: 0 32px;
`
