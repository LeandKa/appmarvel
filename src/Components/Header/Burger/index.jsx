import React, { useState } from 'react'
import { BurgerContainer } from './style'
import BurgerNav from '../BurgerNav/index'

export default function Burger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BurgerContainer open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerContainer>
      <BurgerNav open={open} />
    </>
  )
}
