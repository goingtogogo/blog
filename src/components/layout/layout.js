import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import Header from '../header'
import Footer from '../footer'
import styles from './layout.module.css'
import './layout.css'

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Personal blog about some technical stuff',
            },
            {
              name: 'keywords',
              content: 'gngtgg.space, frontend, javascript, фронтенд',
            },
          ]}
        >
          <html lang="ru" />
        </Helmet>
        <Header />
        <main className={styles.layout}>{children}</main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
