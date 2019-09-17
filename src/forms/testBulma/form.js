import React from 'react'
// import { ErrorMessage } from 'formik'

import { Button } from 'UI'
import {
  // Form,
  TextInput as Text,
  Email,
  Password,
} from 'UI'

export const CustomForm = props => {
  return (
    <form>
      <Text name="Name" />
      <Email name="Email" />
      <Password name="pw" />
      <Password name="pwConfirm" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
