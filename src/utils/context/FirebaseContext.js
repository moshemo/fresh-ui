import React, { createContext } from 'react'

import { firebase } from 'Classes'
import { useAuth } from 'Hooks'

export const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {
  const user = useAuth()

  return (
    <FirebaseContext.Provider value={{ firebase, user }}>
      {children}
    </FirebaseContext.Provider>
  )
}
