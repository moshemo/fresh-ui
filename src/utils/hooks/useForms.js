import { useState } from 'react'

export function useForms(initialValues, auth) {
  const [values, setValues] = useState(initialValues)

  function handleChange(event) {
    event.persist()
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    auth()
  }

  return { handleChange, handleSubmit, values }
}
