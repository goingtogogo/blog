import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Title = styled.h3`
  a {
    font-size: 32px;
    text-decoration: none;
    color: #0e79b2;
  }
`

const PostListing = ({ post }) => (
  <article>
    <Title>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </Title>
    <p>{post.excerpt}</p>
  </article>
)

export default PostListing
