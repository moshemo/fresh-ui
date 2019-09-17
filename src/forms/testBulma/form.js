import React from 'react'
// import { ErrorMessage } from 'formik'

import { Button } from 'UI'
import { Input, TextInput as Text, Email, Password } from 'UI'

export const CustomForm = props => {
  return (
    <form>
      <Input name="name" />
      <Text name="city" />
      <Email name="Email" iconLeft="envelope" iconRight="check" />
      <Password name="pw" />
      <Password name="pwConfirm" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
