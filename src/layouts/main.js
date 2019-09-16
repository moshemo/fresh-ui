import React from 'react'
import PropTypes from 'prop-types'

import { BaseLayout } from './base'
import { Grid } from './grids/grid'
import { Header } from './header/header'
import { ContentBase as Content } from './content/content-styles'
import { MainSidebar as Sidebar } from './sidebar/main-sidebar'
import { Footer } from './footer/footer'

export const MainLayout = ({ children }) => {
  // const { title } = MetaData()

  return (
    <BaseLayout>
      <Grid>
        <Header />
        <Content>{children}</Content>
        <Sidebar />
        <Footer />
      </Grid>
    </BaseLayout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
