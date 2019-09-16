import React from 'react'
import { ErrorMessage } from 'formik'

import { Button } from 'Components'
import { Form, TextInput as Text, Email, Password } from 'Components/Forms'

export const CustomForm = props => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    isValid,
    setFieldTouched,
    touched,
    values,
  } = props

  return (
    <Form formik>
      <h3>Test</h3>
      <Text name="name2" />
      <ErrorMessage component="p" name="name2" />
      <Email name="email2" />
      <ErrorMessage component="p" name="email2" />
      <Password name="password2" />
      <ErrorMessage component="p" name="password2" />
      <Password name="confirmPassword2" />
      <ErrorMessage component="p" name="confirmPassword2" />
      <Button disabled={!isValid || isSubmitting} type="submit">
        Submit
      </Button>
    </Form>
  )
}
