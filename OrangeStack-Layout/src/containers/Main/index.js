import React from "react";
import Nav from './Nav';
import Header from './Header'
import { Container, MainStyled, Section } from './styled';

const Main = () => {
  return (
    <MainStyled>
      <Nav />
      <Container>
        <Header />
        <Section>
          <h1>Webpack Module Federation!</h1>
        </Section>
      </Container>
    </MainStyled>
  )
}

export default Main;
