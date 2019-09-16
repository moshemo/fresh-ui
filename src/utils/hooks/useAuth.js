import { useEffect, useState } from 'react'

import { firebase } from 'Classes'

export function useAuth() {
  const [userAuth, setUserAuth] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        setUserAuth(user)
      } else {
        setUserAuth(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return userAuth
}
