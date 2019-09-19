import React, { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [noLabels, setNoLabels] = useState(false)
  const [noFormik, setNoFormik] = useState(false)

  const toggleLabels = prop => setNoLabels({ noLabels: prop })
  const toggleFormik = prop => setNoFormik({ noFormik: prop })

  return (
    <FormContext.Provider
      value={{ ...noLabels, ...noFormik, toggleLabels, toggleFormik }}
    >
      {children}
    </FormContext.Provider>
  )
}
