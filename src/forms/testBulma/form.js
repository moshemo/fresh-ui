import React from 'react'
// import { ErrorMessage } from 'formik'

import { Button } from 'UI'
import { Email, Form, Group, Password, TextInput as Text } from 'UI'

export const CustomForm = props => {
  return (
    <>
      <Form disabled>
        <Text name="firstName" />
        <Text name="middleName" />
        <Text name="lastName" />

        <Email name="Email" iconLeft="envelope" iconRight="check" />

        <Password name="pw" />
        <Password name="pwConfirm" />
        <Button type="submit">Submit</Button>
      </Form>

      <form style={{ display: 'grid', margin: '36px auto 72px' }}>
        <Text name="firstName" />
        <Text name="middleName" />
        <Text name="lastName" />

        <Email name="Email" iconLeft="envelope" iconRight="check" />

        <Password name="pw" />
        <Password name="pwConfirm" />
        <Button type="submit">Submit</Button>
      </form>
      <form>
        <Group>
          <Text name="firstName" />
          <Text name="middleName" />
          <Text name="lastName" />
        </Group>

        <Group>
          <Email name="Email" iconLeft="envelope" iconRight="check" />
        </Group>

        <Group>
          <Password name="pw" />
          <Password name="pwConfirm" />
        </Group>
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
