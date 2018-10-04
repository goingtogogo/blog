import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/gatsby-icon.png'
import styled from 'styled-components'

const Wrapper = styled.header`
  position: relative;
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  color: blue;
  height: 25vh;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  display: flex;
  z-index: 2;
`

const Nav = styled.nav`
  margin-left: 30px;
  display: flex;
  align-items: center;
`

const LinkWrap = styled.span`
  margin: 0px 10px;
`

const Img = styled.img`
  width: 50px;
  height: auto;
`

const style = {
  color: 'white',
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
          <Link to="/about" style={style}>
            about
          </Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/" style={style}>
            home
          </Link>
        </LinkWrap>
      </Nav>
    </Container>
  </Wrapper>
)

export default Header
