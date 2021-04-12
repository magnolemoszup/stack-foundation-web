import React from 'react';

import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

import { HeaderStyled, Avatar } from './styled'

export default function Header({ isSignedIn, onSignOut }) {

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <HeaderStyled>
        <Avatar>
          <p>{isSignedIn ? 'Bem vindo Alfred! ' : 'Usuário anônimo'}</p>
          <Button
          component={RouterLink}
          to={isSignedIn ? '/' : '/auth/signin'}
          onClick={onClick}
        >
        {isSignedIn ? 'Logout' : 'Login'}
        </Button>
        </Avatar>
      </HeaderStyled>
    </React.Fragment>
  );
}
