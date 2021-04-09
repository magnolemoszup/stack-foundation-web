import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  position: absolute;
  width: calc(100% - 72px);
  height: 100vh;
  left: 72px;
  padding: 0 20px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  margin-bottom: 20px;
`
export const Avatar = styled.div`
  margin-left: auto;

  p {
    font-size: 1rem;
    color: #404659;
    font-weight: bold;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`

export const NavStyled = styled.nav`
  display: flex;
  width: 72px;
  height: 100vh;
  background-color: #F5F6F7;
  position: absolute;
  left: 0;

  ul {
    list-style: none;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 72px;
      height: 72px;
      background-color: #404659;
      margin-bottom: 24px;
      border-left: 4px solid #404659;
      cursor: pointer;
      transition: all 0.2s ease-out;
    }

    li:not(:first-child) {
      background-color: #ECEDEE;
      height: 62px;

      &:hover {
        background-color: #404659;
      }
    }
  }
`
