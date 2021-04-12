import React from 'react'
import { NavStyled } from './styled';

import Logo from '../core/assets/images/logo.svg'
import Home from '../core/assets/images/home.svg'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <NavLink to="/" exact>
            <Logo />
          </NavLink>
        </li>
        <li>
          <Home />
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav;
