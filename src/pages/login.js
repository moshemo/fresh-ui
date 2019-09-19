import React, { useState } from 'react'

import { firebase } from 'Classes'
import { LoginForm } from 'Forms'
import { useForms } from 'Hooks'
import { LoginLayout } from 'Layouts'
import { Button, Flex, NavBase, NavLink } from 'UI'

const INITIAL_VALUES = {
  email: '',
  password: '',
}

const LogInPage = () => {
  return (
    <LoginLayout>
      <LoginForm />
      <NavBase>
        <NavLink to="/forgot">Forgot password?</NavLink>
      </NavBase>
    </LoginLayout>
  )
}

export default LogInPage
