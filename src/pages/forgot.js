import React, { useState } from 'react'

import { firebase } from 'Classes'
import { Button } from 'Components'
// import { FirebaseContext } from 'Context'
import { MainLayout } from 'Layouts'

const ForgotPasswordPage = () => {
  const [accountEmail, setAccountEmail] = useState('')
  const [isPasswordReset, setIsPasswordReset] = useState(false)
  const [passwordResetErrorMessage, setPasswordResetErrorMessage] = useState(
    null
  )

  // const { firebase } = useContext(FirebaseContext)

  async function handleResetPassword() {
    try {
      await firebase.resetPassword(accountEmail)
      setIsPasswordReset(true)
      setPasswordResetErrorMessage(null)
    } catch (error) {
      console.log('Error Sending Email: ', error)
      setPasswordResetErrorMessage(error.message)
      setIsPasswordReset(false)
    }
  }

  return (
    <MainLayout>
      <h3>Forgot Password</h3>
      <div>
        <input
          onChange={event => setAccountEmail(event.target.value)}
          placeholder="Enter your account email address..."
          type="email"
        />
      </div>
      <div>
        <Button onClick={handleResetPassword}>Reset Your Password</Button>
      </div>
      {isPasswordReset && (
        <p>
          A password reset link has been sent to your email account. Please
          click on that link to reset your password.
        </p>
      )}
      {passwordResetErrorMessage && <p>{passwordResetErrorMessage}</p>}
    </MainLayout>
  )
}

export default ForgotPasswordPage
