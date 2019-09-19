import React from 'react'

import { MainLayout } from 'Layouts'
import { SignUpForm } from 'Forms/signup'

const TestPage = () => {
  return (
    <MainLayout>
      <h3>Testing Bulma</h3>
      <SignUpForm />
    </MainLayout>
  )
}

export default TestPage
