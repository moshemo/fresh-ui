import React from 'react'

import { FooterBase } from './footer-styles'
import { CurrentYear } from 'Functions'
import { Container, Text } from 'UI'

export const Footer = () => (
  <FooterBase>
    <Container>
      <Text>
        Copyright © <CurrentYear /> Young Startup
      </Text>
    </Container>
  </FooterBase>
)
