import styled from 'styled-components'

export const MainStyled = styled.main`
  height: 100vh;
  width: 100%;
`
export const Container = styled.div`
  height: 100%;
  left: 72px;
  overflow-y: auto;
  padding: 0 20px;
  position: absolute;
  width: calc(100% - 72px);
`

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  height: 72px;
  justify-content: space-between;
  margin-bottom: 20px;
  position: fixed;
  width: 100%;
`
export const Avatar = styled.div`
  position: absolute;
  right: 112px;
  display: flex;
  align-items: center;

  p {
    color: #404659;
    font-size: 1rem;
    font-weight: bold;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 92px;
`

export const NavStyled = styled.nav`
  background-color: #F5F6F7;
  display: flex;
  height: 100vh;
  left: 0;
  position: absolute;
  width: 72px;

  ul {
    list-style: none;

    li {
      align-items: center;
      background-color: #404659;
      border-left: 4px solid #404659;
      cursor: pointer;
      display: flex;
      height: 72px;
      justify-content: center;
      margin-bottom: 24px;
      transition: all 0.2s ease-out;
      width: 72px;

    }

    li:not(:first-child) {
      background-color: #ECEDEE;
      height: 62px;

      &:hover {
        background-color: #404659;

        svg > path {
          stroke: #FFFFFF;
        }
      }
    }
  }
`
