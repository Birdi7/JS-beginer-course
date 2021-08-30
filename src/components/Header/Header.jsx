import React from 'react'
import { Logo, LogoLink, StyledHeader } from './Header.styles'

function Header() {
  return (
    <StyledHeader>
      <LogoLink href="/">
        <Logo />
        BlackJack Game
      </LogoLink>
    </StyledHeader>
  )
}

export default Header
