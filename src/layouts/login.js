import React from 'react'
import PropTypes from 'prop-types'

import { BaseLayout } from './base'
import { Grid } from 'Components'
import { colors } from 'Variables'

export const LoginLayout = ({ children }) => {
  // const { title } = MetaData()

  return (
    <BaseLayout>
      <Grid bg={colors.primaryLighter} center style={{ minHeight: '100vh' }}>
        {children}
      </Grid>
    </BaseLayout>
  )
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
