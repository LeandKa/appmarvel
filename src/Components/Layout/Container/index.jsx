import React from 'react'
import PropTypes from 'prop-types'
import style from 'styled-components'

const ContainerStyle = style.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
`

export default function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>
}

Container.propTypes = {
  children: PropTypes.array,
}
