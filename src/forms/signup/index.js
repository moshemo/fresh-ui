import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { firebase } from 'Classes'

import { FormFields as Form } from './form'
import { validationSchema } from './validation'
import { initialValues } from './values'

export const SignUpForm = () => {
  async function authenticateUser(values) {
    const { name, email, password } = values
    try {
      await firebase.register(name, email, password)
    } catch (error) {
      console.log('Authentication error: ', error)
      // setAuthError(error.message)
    }
  }

  return (
    <>
      <h1>Form</h1>
      <Formik
        render={props => <Form {...props} />}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          authenticateUser(values)
          alert(JSON.stringify('Your Form Has Successfully Been Submitted'))
          setSubmitting(false)
          resetForm()
        }}
        // onSubmit={(values, { setSubmitting, resetForm }) => {
        //   alert('is Submitting')
        //   setSubmitting(true)
        //   resetForm()
        //   alert(JSON.stringify(values, null, 2))
        //   setSubmitting(false)
        // }}
      />
    </>
  )
}
