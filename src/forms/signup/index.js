import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { FormComp as Form } from './form'

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

export const SignUpForm = () => (
  <>
    <h1>Form</h1>
    <Formik
      render={props => <Form {...props} />}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert('is Submitting')
        setSubmitting(true)
        resetForm()
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    />
  </>
)

const testData = {
  name: 'Mr Ploni',
  email: '',
  email2: '',
  email3: '',
  password: null,
}

const initialValues = {
  name: testData.name || '',
  email: testData.email || '',
  email2: testData.email2 || '',
  email3: testData.email3 || '',
  password: testData.password || '',
  confirmPassword: '',
}
