import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const GlobalStyle = createGlobalStyle`
 body,html{
   margin:0;
   padding:0;
   box-sizing:border-box;
   font-family:roboto;
   width:100%;
 }
`

const ThemeProps = {
  colors: {
    background: '#202020',
    primary: '#151515',
    secondary: '#eb2328',
    third: '#ffffff',
  },
  fonts: ['sasns-serif', 'Roboto'],
  fontSizes: {
    small: '1.0rem',
    medium: '2.0rem',
    large: '3.0rem',
  },
}

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={ThemeProps}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Theme

Theme.propTypes = {
  children: PropTypes.object,
}
