import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'
import styled from 'styled-components'

const Wrapper = styled.header`
  position: relative;
  background-color: #fbfef9;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 30px 0 10px 0;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`

const Nav = styled.nav`
  margin-left: 40px;
  display: flex;
`

const LinkWrap = styled.span`
  margin: 0px 10px;
`

const Img = styled.img`
  width: 80px;
  margin-top: 30px;
  height: auto;
`

const style = {
  color: '#191923',
  fontSize: '24px',
  textDecoration: 'none',
}

const Header = () => (
  <Wrapper>
    <Container>
      <Link to="/">
        <Img src={logo} alt="logo" />
      </Link>
      <Nav>
        <LinkWrap>
          <Link to="/" style={style}>
            главная
          </Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/about" style={style}>
            контакты
          </Link>
        </LinkWrap>
      </Nav>
    </Container>
  </Wrapper>
)

export default Header
