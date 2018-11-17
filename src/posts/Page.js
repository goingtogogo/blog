import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const Header = styled.h1`
  padding-bottom: 20px;
`

export default class Page extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <Header> {data.markdownRemark.frontmatter.title}</Header>
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
