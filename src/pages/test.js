import React from 'react'
import { MainLayout } from 'Layouts'
import { TestBulmaForm } from 'Forms/testBulma'
import { SignUpForm } from 'Forms/signup'
import { CustomForm } from 'Forms/testBulma/form'

const TestPage = () => {
  return (
    <MainLayout>
      <h3>Testing Bulma</h3>
      <TestBulmaForm />
      <SignUpForm />
    </MainLayout>
  )
}

export default TestPage
