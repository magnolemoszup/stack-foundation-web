import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';

import { Container, MainStyled, Section } from './components/styled';

const OrangeAuthAppLazy = lazy(() => import('./components/OrangeAuthApp'));
const OrangePipeAppLazy = lazy(() => import('./components/OrangePipeApp'));

export default () => {
  const [isSignedIn, setIsSignedIn] =  useState(false);
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Container>
          <Header  onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
          <Section>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/auth">
                  <OrangeAuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/" component={OrangePipeAppLazy} />
              </Switch>
            </Suspense>
          </Section>
        </Container>
      </>
    </BrowserRouter>
  );
}