import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

// import { FormSetup as Form } from './form'

import { firebase } from 'Classes'
import { Form, Button, Email, Help, Password, TextInput as Text } from 'UI'

export const SignUpForm = () => {
  async function authenticateUser(setFieldError, values) {
    const { name, email, password } = values
    try {
      await firebase.register(name, email, password)
    } catch (error) {
      console.log('Authentication error: ', error)
      setFieldError('firebaseErrorMessage', error.message)
    }
  }

  return (
    <>
      <h1>Form</h1>
      <Formik
        render={props => <RenderForm {...props} />}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (
          values,
          { setFieldError, setSubmitting, resetForm }
        ) => {
          setSubmitting(true)
          await authenticateUser(setFieldError, values)
          resetForm()
          setSubmitting(false)
        }}
      />
    </>
  )
}

const RenderForm = ({ errors, isSubmitting, isValid }) => (
  <Form>
    <h3>Sign Up</h3>
    <Text name="name" />
    <Email name="email" />
    <Password name="password" />
    <Password name="confirmPassword" />
    <Button disabled={!isValid || isSubmitting} type="submit">
      {errors.firebaseErrorMessage && (
        <Help>{errors.firebaseErrorMessage}</Help>
      )}
      Submit
    </Button>
  </Form>
)

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

// prettier-ignore
const validationSchema = Yup.object().shape({
  name: Yup
    .string('Enter a name')
    .required('Name is required'),
  email: Yup
    .string('Enter your email')
    .required('Email is required')
    .email('Enter a valid email'),
  password: Yup
    .string('')
    .required('Enter your password')
    .min(8, 'Password must contain at least 8 characters'),
  confirmPassword: Yup
    .string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
})
