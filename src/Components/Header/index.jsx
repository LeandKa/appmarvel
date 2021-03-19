import React from 'react'
import {
  HeaderContainer,
  Logo,
  LoginSpan,
  Menu,
  MenuItem,
  SearchSpan,
  IconSpan,
} from './style'
import Burger from './Burger/index'

export default function Header() {
  return (
    <HeaderContainer>
      <LoginSpan>Login</LoginSpan>
      <Burger />
      <Logo src='./marvel.svg'></Logo>
      <Menu>
        <MenuItem href='/'>Comics</MenuItem>
        <MenuItem href='/characters'>Characters</MenuItem>
        <MenuItem href='#'>Movies</MenuItem>
        <MenuItem href='#'>Tv Shows</MenuItem>
      </Menu>
      <SearchSpan href='/search'>
        <IconSpan />
      </SearchSpan>
    </HeaderContainer>
  )
}
