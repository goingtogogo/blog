import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  flex: 1;
  h1 {
    font-size: 32px;
    font-style: italic;
    color: #0e79b2;
    margin: 7px 0;
  }
  h2 {
    font-size: 28px;
    margin: 5px 0;
    font-style: normal;
  }
`

const Layout = ({ children }) => (
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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Gatsby blog' },
            { name: 'keywords', content: 'gatsbyjs, goingtogogo' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
