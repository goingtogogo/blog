import React from 'react'
import PostListing from '../components/listing'
import Layout from '../components/layout'

import {graphql} from 'gatsby'

const IndexPage = ({data}) => (
  <Layout>
    {data.allMarkdownRemark.group.map(({edges, fieldValue}) => (
      <PostListing key={fieldValue} edges={edges} year={fieldValue} />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    allMarkdownRemark {
      group(field: fields___year) {
        fieldValue
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
              year
            }
            excerpt(pruneLength: 180)
          }
        }
      }
    }
  }
`
