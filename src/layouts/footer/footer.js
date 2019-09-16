import React from 'react'

import { Container, Text } from 'Components'
import { FooterBase } from './footer-styles'
import { CurrentYear } from 'Functions'

export const Footer = () => (
  <FooterBase>
    <Container>
      <Text>
        Copyright © <CurrentYear /> Young Startup
      </Text>
    </Container>
  </FooterBase>
)
