import React, { createContext, useEffect, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [noLabels, setNoLabels] = useState(false)
  const [useFormik, setUseFormik] = useState(false)

  const toggleLabels = prop => setNoLabels({ noLabels: prop })
  const toggleFormik = prop => setUseFormik({ useFormik: prop })

  return (
    <FormContext.Provider
      value={{ ...noLabels, ...useFormik, toggleLabels, toggleFormik }}
    >
      {children}
    </FormContext.Provider>
  )
}
