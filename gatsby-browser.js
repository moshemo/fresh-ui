import React from 'react'
import { FirebaseProvider } from './src/utils/context/FirebaseContext'
export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>{element}</FirebaseProvider>
)

require('typeface-roboto')
