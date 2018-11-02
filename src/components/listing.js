import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Title = styled.h3`
  font-style: italic;
  a {
    font-size: 24px;
    text-decoration: none;
    color: #0e79b2;
  }
  margin-bottom: 8px;
`

const Text = styled.p`
  margin-top: 0;
`

const Post = styled.article``

const PostListing = ({ post }) => (
  <Post>
    <Title>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </Title>
    <Text>{post.excerpt}</Text>
  </Post>
)

export default PostListing
