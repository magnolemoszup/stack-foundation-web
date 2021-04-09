import React from 'react'
import { NavStyled } from './styled';

import Logo from '../../core/assets/images/logo.svg'
import Home from '../../core/assets/images/home.svg'

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <Home />
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav;
