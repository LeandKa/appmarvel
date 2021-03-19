import React from 'react'
import {
  BurgerNavMenu,
  BurgerItem,
  BurgerNavLogin,
  BurgerSocial,
} from './style'
import PropTypes from 'prop-types'
import { FaFacebookF, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa'

export default function BurgerNav({ open }) {
  return (
    <BurgerNavMenu open={open}>
      <BurgerItem href='/'>Comics</BurgerItem>
      <BurgerItem href='/characters'>Characters</BurgerItem>
      <BurgerItem href='/'>Tv Shows</BurgerItem>
      <BurgerItem href='/'>Movies</BurgerItem>
      <BurgerNavLogin>
        <h1>Marvel Insider</h1>
        <a href='/'>Login</a>
      </BurgerNavLogin>
      <BurgerSocial>
        <li>
          <a href='/'>
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href='/'>
            <FaInstagram />
          </a>
        </li>
        <li href='/'>
          <FaTwitch />
        </li>
        <li>
          <a href='/'>
            <FaTwitter />
          </a>
        </li>
      </BurgerSocial>
    </BurgerNavMenu>
  )
}

BurgerNav.propTypes = {
  open: PropTypes.bool,
}
