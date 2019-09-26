import React from 'react'
import { navigate } from 'gatsby'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { firebase } from 'Classes'
import { Box, Form, Button, Email, Help, Password, TextInput as Text } from 'UI'

export const LoginForm = () => {
  async function authenticateUser(setFieldError, values) {
    const { email, password } = values

    try {
      await firebase.login(email, password)
      navigate('/', { replace: true })
    } catch (error) {
      console.log('Authentication Error: ', error)
      await setFieldError('firebaseErrorMessage', error.message)
    }
  }

  return (
    <>
      <Formik
        render={props => <RenderForm {...props} />}
        // render={props => {
        //   console.log('Props: ', props)
        //   return <RenderForm {...props} />
        // }}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (
          values,
          { setFieldError, setSubmitting, resetForm }
        ) => {
          setSubmitting(true)
          authenticateUser(setFieldError, values)
          setSubmitting(false)
          resetForm()
        }}
      />
    </>
  )
}

const RenderForm = ({ errors, isSubmitting, isValid, touched }) => {
  return (
    <Form noLabels>
      <Email
        iconLeft="envelope"
        name="email"
        error={touched.email && errors.email ? true : null}
      />
      <Password
        iconLeft="lock"
        name="password"
        error={touched.password && errors.password ? true : null}
      />
      <Button disabled={!isValid || isSubmitting} type="submit">
        Login
      </Button>
      <Button as="a" to="/forgot">
        Forgot Password
      </Button>
      {errors.firebaseErrorMessage && (
        <Help>{errors.firebaseErrorMessage}</Help>
      )}
    </Form>
  )
}

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
