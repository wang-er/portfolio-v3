import React from 'react'
import styled from 'styled-components'
import typography from '../styles/typography.css'
import GlobalStyle from '../styles/globalStyle'


const MarginDiv = styled.div`
    max-width: 945px;
    margin-left: auto;
    margin-right: auto; 
`

const Layout = ({location, children}) => {
    // let rootPath = `/`
    // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    //   rootPath = __PATH_PREFIX__ + `/`
    // }
    return (
      <MarginDiv>
        {/* <Navigation /> */}
        {/* <ThemeProvider theme={theme}> */}
          <GlobalStyle />
        {children}
        {/* </ThemeProvider> */}
      </MarginDiv>
    )
  }


export default Layout