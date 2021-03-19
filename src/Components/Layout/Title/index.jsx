import React from 'react'
import style from 'styled-components'
import PropTypes from 'prop-types'

const TitleText = style.h2`
  font-size:${({ theme }) => theme.fontSizes.medium};
  text-align:center;
  margin-top:3.0rem;
`

export default function Title({ text }) {
  return <TitleText>{text}</TitleText>
}

Title.propTypes = {
  text: PropTypes.string,
}
