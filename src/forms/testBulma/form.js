import React from 'react'
import { ErrorMessage } from 'formik'

import { Button } from 'Components'
import {
  // Form,
  TextInput as Text,
  Email,
  Password,
} from 'Components/Forms/Bulma'

import { MainLayout } from 'Layouts'

export const CustomForm = props => {
  return (
    <form>
      <Text name="Name" before="i am before" />
      <Email name="Email" />
      <Password name="pw" />
      <Password name="pwConfirm" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
