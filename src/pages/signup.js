import React, { useState } from 'react'
import Form from 'react-jsonschema-form'

import { firebase } from 'Classes'
import { Button, Flex } from 'Components'
import { useForms } from 'Hooks'
import { MainLayout } from 'Layouts'

const initialValues = {
  signUpName: '',
  signUpEmail: '',
  signUpPassword: '',
}

const schema = {
  title: 'Signup',
  type: 'object',
  required: 'email',
  properties: {
    name: { type: 'string', title: 'Name', default: 'Enter your name...' },
    email: {
      type: 'string',
      title: 'Email',
      default: 'Enter your email address...',
    },
    password: {
      type: 'string',
      title: 'Password',
      default: 'Create a password...',
    },
  },
}

const SignUpPage4 = () => {
  const { handleChange, handleSubmit, values } = useForms(
    initialValues,
    authenticateUser
  )

  const [authError, setAuthError] = useState(null)

  async function authenticateUser() {
    const { signUpName, signUpEmail, signUpPassword } = values
    try {
      await firebase.register(signUpName, signUpEmail, signUpPassword)
    } catch (error) {
      console.log('Authentication erroror: ', error)
      setAuthError(error.message)
    }
  }
  return (
    <MainLayout>
      <h1>SignUp</h1>
      <Form
        schema={schema}
        onChange={console.log('Changed')}
        onSubmit={console.log('Submitted')}
        onError={console.log('errors')}
      />
      <h2>Old form</h2>
      <form onSubmit={handleSubmit}>
        <Flex column>
          <input
            autoComplete="off"
            name="signUpName"
            onChange={handleChange}
            placeholder="Name..."
            type="text"
            value={values.signUpName}
          />
          <input
            autoComplete="off"
            name="signUpEmail"
            onChange={handleChange}
            placeholder="Email 2..."
            type="email"
            value={values.signUpEmail}
          />
          <input
            name="signUpPassword"
            onChange={handleChange}
            placeholder="Password..."
            type="password"
            value={values.signUpPassword}
          />
          {authError && <p>{authError}</p>}
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </MainLayout>
  )
}

export default SignUpPage4
