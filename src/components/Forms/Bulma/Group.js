import styled from 'styled-components'
import { Control } from './Control'

// prettier-ignore
export const FormGroup = styled.div`
  ${({center}) => center && `justify-content: center;`}
  ${({right}) => right && `justify-content: flex-end;`}

  ${({wrap}) => wrap && `
    flex-wrap: wrap;
    :last-child { margin-bottom: -.75rem; }
    ${Control} { margin-bottom: .75rem; }
  `}

  > ${Control} {
    flex-shrink: 0;

    :not(:last-child) {
      margin-bottom: 0;
      margin-right: 0.75rem;
    }

    ${({expanded}) => expanded && `
      flex-grow: 1;
      flex-shrink: 1;
    `}
  }
`
