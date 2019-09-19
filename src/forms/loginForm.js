import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Formik } from 'formik'
import * as Yup from 'yup'

// import { FormSetup as Form } from './form'

import { firebase } from 'Classes'
import { Form, Button, Email, Password, TextInput as Text } from 'UI'

export const LoginForm = () => {
  const [authError, setAuthError] = useState(null)

  async function authenticateUser(values) {
    const { email, password } = values

    try {
      await firebase.login(email, password)
      navigate('/news', { replace: true })
    } catch (error) {
      console.log('Authentication Error: ', error)
      setAuthError(error.message)
    }
  }

  return (
    <>
      <h1>Form</h1>
      <Formik
        render={({ isSubmitting, isValid }) => (
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
        )}
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
  email: '',
  password: '',
}

// prettier-ignore
const validationSchema = Yup.object().shape({
  email: Yup
    .string('Enter your email')
    .required('Email is required')
    .email('Enter a valid email'),
  password: Yup
    .string('')
    .required('Enter your password')
})
