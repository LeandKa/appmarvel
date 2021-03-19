import React from 'react'
import ReactLoading from 'react-loading'
import '../loading.css'
import PropTypes from 'prop-types'

export default function Loader({ classe }) {
  return (
    <ReactLoading
      width={'5%'}
      height={'5%'}
      className={classe}
      color={'black'}
      type='spin'
    />
  )
}

Loader.propTypes = {
  classe: PropTypes.string,
}
