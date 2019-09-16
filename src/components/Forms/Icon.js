import styled, { css } from 'styled-components'
import { Field as FormikField } from 'formik'

import { Icon } from 'Components'
import { forms } from 'Variables'

export const InputIcon = styled(Icon)`
  color: ${forms.icon.color};
  pointer-events: none;

  position: absolute;
  top: 0;

  height: ${forms.input.height};
  width: ${forms.input.height};

  z-index: 4;
`
