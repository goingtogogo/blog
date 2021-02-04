import React, {Component} from 'react'
import {graphql} from 'gatsby'

import styles from '../stylesheets/page.module.css'
import Layout from '../components/layout'

export default class Page extends Component {
  render() {
    const {
      data: {
        markdownRemark: {frontmatter, html},
      },
    } = this.props
    return (
      <Layout>
        <article className={styles.wrapper}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <time className={styles.datetime} datetime={frontmatter.fullDate}>
            {frontmatter.date}
          </time>
          {frontmatter.modifiedDate && (
            <>
              , обновлено:{' '}
              <time
                className={styles.datetime}
                datetime={frontmatter.modifiedFullDate}
              >
                {frontmatter.modifiedDate}
              </time>
            </>
          )}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{__html: html}}
          />
          {frontmatter.tags && (
            <ul className={styles.tags}>
              {frontmatter.tags.map(tag => (
                <li className={styles.tag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        fulldate: date
        modifiedFullDate: modifiedDate
        modifiedDate(formatString: "DD MMMM[,] YYYY", locale: "ru")
        tags
        date(formatString: "DD MMMM[,] YYYY", locale: "ru")
      }
    }
  }
`
