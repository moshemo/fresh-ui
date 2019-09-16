import { css } from 'styled-components'
import { colors, forms } from 'Variables'

export const SharedCSS = css`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  vertical-align: top;

  background-color: ${forms.input.backgroundColor};
  color: #363636;
  font-size: 1rem;
  line-height: 1.5;

  border: ${forms.input.border};
  border-radius: ${forms.input.borderRadius};
  box-shadow: none;
  box-sizing: border-box;

  height: ${forms.input.height};
  padding: ${forms.input.padding};
  width: ${forms.input.width};

  [type='email'],
  [type='number'],
  [type='password'],
  [type='search'],
  [type='tel'],
  [type='text'],
  [type='url'],
  [type='color'],
  [type='date'],
  [type='month'],
  [type='week'],
  [type='datetime'],
  [type='datetime-local'],
  :not([type]) {
    appearance: none;
  }

  [type='checkbox'],
  [type='radio'] {
    vertical-align: baseline;
  }

  :focus {
    border: ${forms.input.focusBorder};
    outline: 0;
  }

  ::placeholder {
    color: rgba(54, 54, 54, 0.4);
  }
`

export const DisabledCSS = css`
  background-color: ${forms.disabled.backgroundColor};
  border-color: ${forms.disabled.borderColor};
  box-shadow: ${forms.disabled.boxShadow};
  color: ${forms.disabled.color};
  cursor: not-allowed;
`

// prettier-ignore
export const InputCSS = css`
  ${SharedCSS};

${({iconLeft}) => iconLeft && `padding-left: 2.25em;`}
${({iconRight}) => iconRight && `padding-right: 2.25em;`}

${({plain}) => plain && `
  background-color: transparent;
  border: none;
  :focus { border: none; }
`}

${({fullWidth}) => fullWidth && `grid-column: 1 / -1;`}

${({error, info, success, warning}) => {
  if      (error)   { return `border-color: ${colors.error}` } 
  else if (info)    { return `border-color: ${colors.info}` } 
  else if (success) { return `border-color: ${colors.success}` } 
  else if (warning) { return `border-color: ${colors.warning}` }
}};

${({ disabled }) => disabled && `${DisabledCSS}`}
`
