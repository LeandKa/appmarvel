import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import style from 'styled-components'

const ContainerMessage = style.div`
   height:52vh;

   h1{
     margin-top:4.0rem;
     text-align:center;
   }
`

export default function Message({ message }) {
  useEffect(() => {
    console.log(message)
  }, [message])

  return (
    <ContainerMessage>
      <h1>Sorry,but no result found with {message}!</h1>
    </ContainerMessage>
  )
}

Message.propTypes = {
  message: PropTypes.string,
}
