import React, { useContext } from 'react'

import { FirebaseContext } from 'Context'
import { NavLink } from 'Components'

export const HeaderLinks = () => {
  const { firebase, user } = useContext(FirebaseContext)

  const handleLogOut = event => {
    event.preventDefault()
    firebase.logout()
  }

  return (
    <>
      <NavLink to="/news">New</NavLink>
      {user ? (
        <>
          <NavLink to="/" onClick={handleLogOut}>
            Log Out
          </NavLink>
          <NavLink to="/">{user.displayName}</NavLink>
          <NavLink circle="true" to="/signup">
            <span>MM</span>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </>
      )}
    </>
  )
}

// export const SignedIn = props => {

//   const { user } = useContext(FirebaseContext)

//   return (
//   <>
//     <NavLink to="/news">New</NavLink>
//     <NavLink to="/ads">Log Out</NavLink>
//     <NavLink link-style="circle" to="/signup">
//       <span>MM</span>
//     </NavLink>
//   </>
// )}

// export const SignedOut = props => {

//   return (
//   <>
//     <NavLink to="/signup">Sign Up</NavLink>
//     <NavLink to="/login">Log In</NavLink>
//   </>
// )}
