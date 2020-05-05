import React from 'react'
import styles from './listing.module.css'
import Link from 'gatsby-link'

const PostListing = ({post}) => (
  <Link to={post.fields.slug} className={styles.link}>
    <article className={styles.article}>
      <h3 className={styles.title}>{post.frontmatter.title}</h3>
      <p className={styles.content}>{post.excerpt}</p>
    </article>
  </Link>
)

export default PostListing
