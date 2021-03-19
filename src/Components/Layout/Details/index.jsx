import React from 'react'
import PropTypes from 'prop-types'
import style from 'styled-components'

const Body = style.div`
 display: flex;
  flex-direction: row;
  width: 80%;
  margin-bottom:2.0rem;
  align-self: center;
  box-shadow:  6px 10px 4px rgba(0, 0, 0, 0.15);
  @media(max-width:600px){
   flex-direction:column; 
  }
}
`

export default function Details({ children }) {
  return <Body>{children}</Body>
}

Details.propTypes = {
  children: PropTypes.object,
}
