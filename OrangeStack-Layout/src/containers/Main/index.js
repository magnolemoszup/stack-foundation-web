import React from "react";
import Nav from './Nav'
import { Content, Main, Header, Avatar, Section } from './styled';

export default () => {
  return (
    <Main>
      <Nav />
      <Content>
        <Header>
          <Avatar>
            <p>Bem vindo Alfred!</p>
          </Avatar>
        </Header>
        <Section>
          <h1>Webpack Module Federation Boilerplate!</h1>
        </Section>
      </Content>
    </Main>
  )
}
