import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default class Page extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <h1> {data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
      }
    }
  }
`
