import React from 'react'
import { ErrorMessage } from 'formik'

import { Button } from 'Components'
import {
  Form,
  Input,
  TextInput as Text,
  Email,
  Password,
} from 'Components/Forms'

export const FormComp = props => {
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
    <Form noLabels>
      <h3>Sign Up</h3>
      <Text
        name="name"
        placeholder="Enter your name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
      />
      <ErrorMessage component="p" name="name" />
      <Email
        name="email"
        // placeholder="Enter your Email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
      />
      <ErrorMessage component="p" name="email" />
      <Password
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
      />
      <ErrorMessage component="p" name="password" />
      <Password
        name="confirmPassword"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.confirmPassword}
      />
      <ErrorMessage component="p" name="confirmPassword" />
      <Button disabled={!isValid || isSubmitting} type="submit">
        Submit
      </Button>
    </Form>
  )
}
