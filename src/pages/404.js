import React from 'react'
import Layout from '../components/layout'
import styles from '../stylesheets/404.module.css'

const NotFoundPage = () => (
  <Layout>
    <div className={styles.label}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
