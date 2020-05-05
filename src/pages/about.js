import React from 'react'
import Img from 'gatsby-image'

import styles from '../stylesheets/about.module.css'
import Layout from '../components/layout'

export default function(props) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.contact}>
          <span>telegram: </span>
          <a href="https://t.me/goingtogogo">@goingtogogo</a>
        </div>
        <div className={styles.contact}>
          <span>email: </span>
          <a href="mailto:adisssabeba@gmail.com">adisssabeba@gmail.com</a>
        </div>
        <Img fluid={props.data.background.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    background: file(relativePath: {regex: "/bg.jpg/"}) {
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
