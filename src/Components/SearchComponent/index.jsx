import React, { Fragment } from 'react'
import { SearchContainer, SearchIcon, Check } from './style'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

export default function Search({ onChange, onSubmit, type }) {
  return (
    <SearchContainer onSubmit={onSubmit}>
      <input maxLength='16' name='keySearch' onChange={onChange} type='text' />
      <SearchIcon type='submit'>
        <FaSearch />
      </SearchIcon>
      {type ? (
        <Fragment>
          <Check style={{ flexDirection: 'row' }}>
            <FormControlLabel
              value='characters'
              onChange={onChange}
              name='itemType'
              control={<Radio />}
              label='Characters'
            />
            <FormControlLabel
              value='comics'
              onChange={onChange}
              name='itemType'
              control={<Radio />}
              label='Comics'
            />
          </Check>
        </Fragment>
      ) : (
        <br />
      )}
    </SearchContainer>
  )
}

Search.propTypes = {
  type: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}
