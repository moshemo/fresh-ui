import React from 'react'
import PropTypes from 'prop-types'

import { BaseLayout as Layout } from './base'
import { Header } from './header/header'
import { ContentBase as Content } from './content/content-styles'
import { Footer } from './footer/footer'

export const InnerLayout = ({ children }) => {
  // const { title } = MetaData()

  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}

InnerLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
