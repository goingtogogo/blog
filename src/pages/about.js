import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'

const Wrapper = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding: 10px 0;
  line-height: 2;
  a {
    color: #0e79b2;
    text-decoration: none;
  }
`

export default function(props) {
  return (
    <Layout>
      <Wrapper>
        <span>telegram: </span>
        <a href="https://t.me/goingtogogo">@goingtogogo</a>
        <br />
        <span>email: </span>
        <a href="mailto:adisssabeba@gmail.com">adisssabeba@gmail.com</a>
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
