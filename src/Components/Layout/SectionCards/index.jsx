import React from 'react'
import style from 'styled-components'
import PropTypes from 'prop-types'

const Section = style.div`
  display:grid;
  grid-template-columns:repeat(4,250px);
  gap:2.0rem;
  align-self:center;
  @media(max-width:1125px){
    grid-template-columns:repeat(3,250px);
  }
  @media(max-width:830px){
    grid-template-columns:repeat(2,250px);
  }
  @media(max-width:550px){
    grid-template-columns:repeat(1,250px);
  }
`

export default function SectionCards({ children }) {
  return <Section>{children}</Section>
}

SectionCards.propTypes = {
  children: PropTypes.array,
}
