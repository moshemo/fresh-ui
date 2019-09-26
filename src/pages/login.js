import React, { useState } from 'react'

import { firebase } from 'Classes'
import { LoginForm } from 'Forms'
import { useForms } from 'Hooks'
import { AuthLayout } from 'Layouts'
import { Button, Flex, NavBase, NavLink } from 'UI'

const INITIAL_VALUES = {
  email: '',
  password: '',
}

const LogInPage = () => {
  return (
    <AuthLayout>
      <>
        <h4>Logo</h4>
        <span>Login</span>
        <span>Register</span>
        <LoginForm />
      </>

      <NavBase>
        <span>Don't have an account?</span>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavBase>
    </AuthLayout>
  )
}

export default LogInPage
