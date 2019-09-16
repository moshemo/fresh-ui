import React from 'react'
import { MainLayout } from 'Layouts'
import { TestBulmaForm } from 'Forms/testBulma'

const TestPage = () => {
  return (
    <MainLayout>
      <h3>Testing Bulma</h3>
      <TestBulmaForm />
    </MainLayout>
  )
}

export default TestPage
