import { useState } from 'react'

export function useValidation(initialValues) {
  const [values, setValues] = useState(initialValues)

  function handleChange(event) {
    event.persist()
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }))
  }

  return { handleChange, values }
}
