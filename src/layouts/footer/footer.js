import React from 'react'

import { Text } from 'Elements'
import { Container } from 'Structure'
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
