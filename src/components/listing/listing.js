import React from 'react'
import styles from './listing.module.css'
import Link from 'gatsby-link'

const PostListing = ({edges, year}) => (
  <div className={styles.yearPosts}>
    <span className={styles.year}>{year}</span>
    {edges.map(({node: post}) => (
      <Link to={post.fields.slug} className={styles.link} key={post.id}>
        <article className={styles.article}>
          <h2 className={styles.title}>{post.frontmatter.title}</h2>
          <p className={styles.content}>{post.excerpt}</p>
        </article>
      </Link>
    ))}
  </div>
)

export default PostListing
