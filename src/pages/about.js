import React from 'react'
// import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'

const Wrapper = styled.div`
  font-size: 22px;
  font-weight: 700;
  a {
    color: #0e79b2;
    text-decoration: none;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
`

const Contact = styled.div`
  margin: 10px 0;
`

export default function(props) {
  return (
    <Layout>
      <Wrapper>
        <Contact>
          <span>telegram: </span>
          <a href="https://t.me/goingtogogo">@goingtogogo</a>
        </Contact>
        <Contact>
          <span>email: </span>
          <a href="mailto:adisssabeba@gmail.com">adisssabeba@gmail.com</a>
        </Contact>
        {/* <Img fluid={props.data.background.childImageSharp.fluid} /> */}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    background: file(relativePath: { regex: "/bg.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`
