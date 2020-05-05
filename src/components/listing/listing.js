import React from 'react'
import styles from './listing.module.css'
import Link from 'gatsby-link'

const PostListing = ({post}) => (
  <article>
    <h3 className={styles.article__title}>
      <Link to={post.fields.slug} className={styles.article__link}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <p className={styles.article__content}>{post.excerpt}</p>
  </article>
)

export default PostListing
