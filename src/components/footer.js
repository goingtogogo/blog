import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  font-family: georgia, serif;
  line-height: 1.5;
  background-color: #fbfef9;
  color: #bf1363;
`

const Info = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px 1.0875rem 1.45rem;
`

export default () => {
  return (
    <Footer>
      <Info>
        © 2018 <br /> Built with ⚛️ Gatsby. Delivered with Netlify 💫
      </Info>
    </Footer>
  )
}
