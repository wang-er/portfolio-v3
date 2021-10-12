import React from 'react'
import typography from '../styles/typography.css'
import GlobalStyle from '../styles/globalStyle'


const Layout = ({location, children}) => {
    // let rootPath = `/`
    // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    //   rootPath = __PATH_PREFIX__ + `/`
    // }

    return (
      <div>
        {/* <Navigation /> */}
        {/* <ThemeProvider theme={theme}> */}
          <GlobalStyle />
        {children}
        {/* </ThemeProvider> */}
      </div>
    )
  }


export default Layout