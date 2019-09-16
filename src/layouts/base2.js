// import React from 'react'
// import PropTypes from 'prop-types'
// import { ThemeProvider } from 'styled-components'

// import { firebase } from 'Classes'
// import { FirebaseContext } from 'Context'
// import { useAuth } from 'Hooks'
// import GlobalCss from 'Global'
// import theme from 'Theme'
// export const BaseLayout = ({ children }) => {
//   const user = useAuth()
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <FirebaseContext.Provider value={{ firebase, user }}>
//           <>{children}</>
//         </FirebaseContext.Provider>
//       </ThemeProvider>
//       <GlobalCss />
//     </>
//   )
// }

// BaseLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
