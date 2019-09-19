import React from 'react'
import { ErrorMessage } from 'formik'

import { Button } from 'UI'
import { Form, Email, TextInput as Text, Password } from 'UI'

export const FormFields = ({ isSubmitting, isValid }) => {
  console.log('isValid: ', isValid)
  return (
    <Form>
      <h3>Sign Up</h3>
      <Text name="name" />
      <Email name="email" />
      <Password name="password" />
      <Password name="confirmPassword" />
      <Button disabled={!isValid || isSubmitting} type="submit">
        Submit
      </Button>
    </Form>
  )
}
