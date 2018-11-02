import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  font-size: 18px;
  background-color: #fbfef9;
  color: #bf1363;
`

const Info = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px 1.0875rem 1.45rem;
  a {
    color: inherit;
    text-decoration: none;
  }
`

export default () => {
  return (
    <Footer>
      <Info>
        © 2018 <br /> Built with ⚛️
        <a href="https://gatsbyjs.org/" alt="GatsbyJS">
          {' '}
          Gatsby
        </a>
        . Delivered with{' '}
        <a href="https://gatsbyjs.org/" alt="GatsbyJS">
          Netlify
        </a>
        💫
      </Info>
    </Footer>
  )
}
