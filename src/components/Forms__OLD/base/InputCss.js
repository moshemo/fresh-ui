import { css } from 'styled-components'

import { forms } from 'Variables'

export const InputCss = css`
  background-color: ${forms.input.backgroundColor};

  border: ${forms.input.border};
  border-radius: ${forms.input.borderRadius};

  box-shadow: ${forms.input.boxShadow};
  box-sizing: border-box;

  height: ${forms.input.height};
  /* margin-bottom: 1.5rem; */
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

  :focus {
    border: ${forms.input.focusBorder};
    outline: 0;
  }

  ::placeholder {
    color: rgba(54, 54, 54, 0.4);
  }
`
