import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

// import { FormSetup as Form } from './form'

import { firebase } from 'Classes'
import { Form, Button, Email, Password, TextInput as Text } from 'UI'

export const SignUpForm = () => {
  const [authError, setAuthError] = useState(null)

  async function authenticateUser(values) {
    const { name, email, password } = values
    try {
      await firebase.register(name, email, password)
    } catch (error) {
      console.log('Authentication error: ', error)
      setAuthError(error.message)
    }
  }

  return (
    <>
      <h1>Form</h1>
      <Formik
        render={<RenderForm />}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          await authenticateUser(values)
          resetForm()
          setSubmitting(false)
        }}
      />
    </>
  )
}

const RenderForm = ({ isSubmitting, isValid }) => (
  <Form>
    <h3>Sign Up</h3>
    <Text name="name" />
    <Email name="email" />
    <Password name="password" />
    <Password name="confirmPassword" />
    {authError && <p>{authError}</p>}
    <Button disabled={!isValid || isSubmitting} type="submit">
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
