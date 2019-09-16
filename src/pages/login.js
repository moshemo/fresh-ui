import React, { useState } from 'react'
import { navigate } from 'gatsby'

import { firebase } from 'Classes'
import { Button, Flex, NavBase, NavLink } from 'Components'
import { useForms } from 'Hooks'
import { LoginLayout } from 'Layouts'

const INITIAL_VALUES = {
  loginEmail: '',
  loginPassword: '',
}

const LogInPage = () => {
  const { handleChange, handleSubmit, values } = useForms(
    INITIAL_VALUES,
    authenticateUser
  )
  const [authError, setAuthError] = useState(null)

  async function authenticateUser() {
    const { loginEmail, loginPassword } = values

    try {
      await firebase.login(loginEmail, loginPassword)
      navigate('/news', { replace: true })
    } catch (error) {
      console.log('Authentication Error: ', error)
      setAuthError(error.message)
    }
  }

  return (
    <LoginLayout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Flex column>
          <input
            autoComplete="off"
            name="loginEmail"
            onChange={handleChange}
            placeholder="Email..."
            type="email"
            value={values.loginEmail}
          />
          <input
            name="loginPassword"
            onChange={handleChange}
            placeholder="Password..."
            type="password"
            value={values.loginPassword}
          />
          {authError && <p>{authError}</p>}
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
      <NavBase>
        <NavLink to="/forgot">Forgot password?</NavLink>
      </NavBase>
    </LoginLayout>
  )
}

export default LogInPage
