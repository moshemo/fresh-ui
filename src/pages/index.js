import React from 'react'
// import React from 'react'

// import { Button } from 'Components'
// import { Form, TextInput, Email, Password } from 'Components/Forms'
// import { Button, Flex } from 'Components'
// import { useValidation } from 'Hooks'
// import { useValidation } from 'Hooks'
import { MainLayout } from 'Layouts'
// import { MainLayout } from 'Layouts'

// const initialValues = {
//   signUpName: '',
//   signUpEmail: '',
//   signUpPassword: '',
// }

const HomePage = () => {
  // const { handleChange, values } = useValidation(initialValues)

  return (
    <MainLayout>
      <h1>SignUp</h1>
      {/* <Form>
        <TextInput
          autoComplete="off"
          name="signUpName"
          onChange={handleChange}
          placeholder="Name"
          type="text"
          value={values.signUpName}
        />
        <Email
          autoComplete="off"
          name="signUpEmail"
          onChange={handleChange}
          placeholder="Email"
          type="email"
          value={values.signUpEmail}
        />
        <Password
          name="signUpPassword"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          value={values.signUpPassword}
        /> */}
      {/* {authError && <p>{authError}</p>} */}
      {/* <Button type="submit">Submit</Button>
      </Form> */}
    </MainLayout>
  )
}

export default HomePage

// import React from 'react'

// import { Button } from 'Components'
// import { Form, TextInput, Email, Password } from 'Components/Forms'

// import useValidation from 'Hooks'

// import { MainLayout } from 'Layouts'

// // const initialValues = {
// //   firstName: 'First Name',
// //   lastName: 'Last Name',
// //   email: 'test@email.com',
// //   password: '12341234',
// // }

// const initialValues = {
//   signUpName: '',
//   signUpEmail: '',
//   signUpPassword: '',
// }

// // console.log('useValidation: ', useValidation())
// const HomePage = () => {
//   const { handleChange, values } = useValidation(initialValues)

//   return (
//     <MainLayout>
//       <h1>Home</h1>

//       <Form>
//         <TextInput
//           forId="firstName"
//           label="First Name"
//           name="firstName"
//           placeholder="First Name"
//           // value={values.firstName}
//         />

//         <TextInput
//           forId="lastName"
//           label="Last Name"
//           name="lastName"
//           // onChange={handleChange}
//           placeholder="Last Name"
//           // value={values.lastName}
//         />

//         <Email
//           forId="email"
//           label="Email"
//           name="email"
//           // onChange={handleChange}
//           placeholder="Email"
//           // value={values.email}
//         />

//         <Password
//           forId="password"
//           label="Password"
//           name="password"
//           // onChange={handleChange}
//           placeholder="Password"
//           // value={values.password}
//         />
//         <Password
//           forId="confirmPassword"
//           label="Confirm Password"
//           name="confirmPassword"
//           // onChange={handleChange}
//           placeholder="Confirm Password"
//           // value={values.confirmPassword}
//         />
//         <Button type="submit">Submit</Button>
//       </Form>
//     </MainLayout>
//   )
// }

// export default HomePage
